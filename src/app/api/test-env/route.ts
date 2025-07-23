import { NextResponse } from 'next/server';

// This route is compatible with static export
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate at most every hour

export async function GET() {
  return NextResponse.json({
    // Contentful checks removed
  });
} 