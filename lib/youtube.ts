import "server-only";

// NOTE: This repo currently lacks Node/Next type augmentations in TS config.
// Keep this server-only file lint-clean without adding deps.
declare const process: any;

/**
 * Server-only YouTube Data API integration
 *
 * This module fetches videos from Zahi's YouTube channel.
 * All API keys and secrets are accessed server-side only and never exposed to the client.
 *
 * Environment Variables Required (set in Vercel):
 * - YOUTUBE_API_KEY: Your YouTube Data API v3 key from Google Cloud Console
 * - YOUTUBE_CHANNEL_ID: The canonical channel ID for @zahishaked
 *
 * Caching:
 * - "Latest" updates every 6 hours (21600 seconds)
 * - "Last year most watched" updates once per day (86400 seconds)
 */

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  url: string;
}

const YT_REVALIDATE_LATEST_SECONDS = 60 * 60 * 6; // 6 hours
const YT_REVALIDATE_LAST_YEAR_MOST_WATCHED_SECONDS = 60 * 60 * 24; // 24 hours

// Next.js extends fetch() with the `next` option, but our TS setup doesn't know it.
const nextRevalidate = (seconds: number) => ({ next: { revalidate: seconds } } as any);

function toVideo(item: any): YouTubeVideo {
  const snippet = item?.snippet || {};
  const videoId = item?.id || item?.snippet?.resourceId?.videoId || "";
  const description = snippet.description || "";

  const truncatedDescription =
    description.length > 160 ? description.substring(0, 140).trim() + "..." : description;

  const thumbnails = snippet.thumbnails || {};
  const thumbnailUrl =
    thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url || "";

  return {
    id: videoId,
    title: snippet.title || "Untitled",
    description: truncatedDescription,
    thumbnailUrl,
    publishedAt: snippet.publishedAt || "",
    url: `https://www.youtube.com/watch?v=${videoId}`,
  };
}

/**
 * Fetches the latest videos from the configured YouTube channel
 */
export async function fetchLatestVideos(limit: number = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.warn("YouTube API not configured: Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID");
    return [];
  }

  try {
    // First, get the channel's uploads playlist ID
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
    const channelResponse = await fetch(channelUrl, nextRevalidate(YT_REVALIDATE_LATEST_SECONDS));
    if (!channelResponse.ok) return [];

    const channelData = await channelResponse.json();
    const uploadsPlaylistId =
      channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) return [];

    // Fetch videos from the uploads playlist
    const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${limit}&key=${apiKey}`;
    const videosResponse = await fetch(videosUrl, nextRevalidate(YT_REVALIDATE_LATEST_SECONDS));
    if (!videosResponse.ok) return [];

    const videosData = await videosResponse.json();
    const items = videosData?.items || [];

    return items
      .filter((item: any) => item?.snippet?.resourceId?.videoId)
      .map((item: any) =>
        toVideo({
          id: item.snippet.resourceId.videoId,
          snippet: item.snippet,
        })
      );
  } catch (error) {
    console.error("Error fetching latest YouTube videos:", error);
    return [];
  }
}

/**
 * Fetches the most viewed videos from the configured YouTube channel (all-time-ish).
 */
export async function fetchMostViewedVideos(limit: number = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.warn("YouTube API not configured: Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID");
    return [];
  }

  try {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=viewCount&maxResults=${limit}&key=${apiKey}`;
    const searchResponse = await fetch(searchUrl, nextRevalidate(3600));
    if (!searchResponse.ok) return [];

    const searchData = await searchResponse.json();
    const items = searchData?.items || [];
    if (items.length === 0) return [];

    const videoIds = items.map((item: any) => item?.id?.videoId).filter(Boolean).join(",");
    if (!videoIds) return [];

    const videosDetailUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`;
    const videosDetailResponse = await fetch(videosDetailUrl, nextRevalidate(3600));
    if (!videosDetailResponse.ok) return [];

    const videosDetailData = await videosDetailResponse.json();
    const videoDetails = videosDetailData?.items || [];
    const detailsMap = new Map<string, any>(videoDetails.map((v: any) => [v.id, v]));

    return items
      .filter((item: any) => item?.id?.videoId)
      .map((item: any) => {
        const videoId = item.id.videoId;
        const detail = detailsMap.get(videoId);
        return toVideo({ id: videoId, snippet: detail?.snippet || item.snippet });
      });
  } catch (error) {
    console.error("Error fetching most viewed YouTube videos:", error);
    return [];
  }
}

/**
 * Fetches the most viewed videos from the last 365 days for the configured YouTube channel.
 * Cached once per day to reduce API usage.
 */
export async function fetchMostViewedVideosLastYear(limit: number = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.warn("YouTube API not configured: Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID");
    return [];
  }

  try {
    const publishedAfter = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();

    const searchUrl =
      `https://www.googleapis.com/youtube/v3/search?part=snippet` +
      `&channelId=${channelId}` +
      `&type=video` +
      `&order=viewCount` +
      `&publishedAfter=${encodeURIComponent(publishedAfter)}` +
      `&maxResults=${limit}` +
      `&key=${apiKey}`;

    const searchResponse = await fetch(
      searchUrl,
      nextRevalidate(YT_REVALIDATE_LAST_YEAR_MOST_WATCHED_SECONDS)
    );
    if (!searchResponse.ok) return [];

    const searchData = await searchResponse.json();
    const items = searchData?.items || [];
    if (items.length === 0) return [];

    const videoIds = items.map((item: any) => item?.id?.videoId).filter(Boolean).join(",");
    if (!videoIds) return [];

    const videosDetailUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`;
    const videosDetailResponse = await fetch(
      videosDetailUrl,
      nextRevalidate(YT_REVALIDATE_LAST_YEAR_MOST_WATCHED_SECONDS)
    );
    if (!videosDetailResponse.ok) return [];

    const videosDetailData = await videosDetailResponse.json();
    const videoDetails = videosDetailData?.items || [];
    const detailsMap = new Map<string, any>(videoDetails.map((v: any) => [v.id, v]));

    return items
      .filter((item: any) => item?.id?.videoId)
      .map((item: any) => {
        const videoId = item.id.videoId;
        const detail = detailsMap.get(videoId);
        return toVideo({ id: videoId, snippet: detail?.snippet || item.snippet });
      });
  } catch (error) {
    console.error("Error fetching last-year most viewed YouTube videos:", error);
    return [];
  }
}

