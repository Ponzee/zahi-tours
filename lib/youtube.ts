import "server-only";

/**
 * Server-only YouTube Data API integration
 * 
 * This module fetches the latest videos from Zahi's YouTube channel.
 * All API keys and secrets are accessed server-side only and never exposed to the client.
 * 
 * Environment Variables Required (set in Vercel):
 * - YOUTUBE_API_KEY: Your YouTube Data API v3 key from Google Cloud Console
 * - YOUTUBE_CHANNEL_ID: The canonical channel ID for @zahishaked
 * 
 * Caching: Results are cached for 1 hour (3600 seconds) to avoid hitting API rate limits.
 */

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  url: string;
}

/**
 * Fetches the latest videos from the configured YouTube channel
 * @param limit - Number of videos to fetch (default: 6)
 * @returns Array of video objects, or empty array on error
 */
export async function fetchLatestVideos(limit: number = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  // If env vars are missing, return empty array (graceful degradation)
  if (!apiKey || !channelId) {
    console.warn('YouTube API not configured: Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID');
    return [];
  }

  try {
    // First, get the channel's uploads playlist ID
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
    
    const channelResponse = await fetch(channelUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!channelResponse.ok) {
      console.error('YouTube API error: Failed to fetch channel data');
      return [];
    }

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      console.error('YouTube API error: Could not find uploads playlist');
      return [];
    }

    // Fetch videos from the uploads playlist
    const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${limit}&order=date&key=${apiKey}`;
    
    const videosResponse = await fetch(videosUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!videosResponse.ok) {
      console.error('YouTube API error: Failed to fetch videos');
      return [];
    }

    const videosData = await videosResponse.json();
    const items = videosData?.items || [];

    // Transform YouTube API response to our clean format
    const videos: YouTubeVideo[] = items
      .filter((item: any) => item.snippet?.resourceId?.videoId) // Only include actual videos
      .map((item: any) => {
        const snippet = item.snippet;
        const videoId = snippet.resourceId.videoId;
        const description = snippet.description || '';
        
        // Truncate description to 140-160 chars
        const truncatedDescription = description.length > 160 
          ? description.substring(0, 140).trim() + '...'
          : description;

        // Get high-res thumbnail (prefer maxres, fallback to high)
        const thumbnails = snippet.thumbnails || {};
        const thumbnailUrl = thumbnails.maxres?.url || 
                            thumbnails.high?.url || 
                            thumbnails.medium?.url || 
                            thumbnails.default?.url || 
                            '';

        return {
          id: videoId,
          title: snippet.title || 'Untitled',
          description: truncatedDescription,
          thumbnailUrl,
          publishedAt: snippet.publishedAt || '',
          url: `https://www.youtube.com/watch?v=${videoId}`,
        };
      });

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return []; // Return empty array on any error (graceful degradation)
  }
}

