import { NextResponse } from 'next/server';
import { fetchLatestVideos } from '@/lib/youtube';

export const runtime = "nodejs";

/**
 * GET /api/youtube/latest
 * 
 * Returns the latest videos from Zahi's YouTube channel.
 * This route is server-only and safely accesses YOUTUBE_API_KEY.
 * 
 * Response: { videos: YouTubeVideo[] }
 */
export async function GET() {
  try {
    const videos = await fetchLatestVideos(6);
    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error in YouTube API route:', error);
    // Always return valid JSON, even on error
    return NextResponse.json({ videos: [] });
  }
}

