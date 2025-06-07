import { NextResponse } from 'next/server';

// This route is compatible with static export
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate at most every hour

export async function GET() {
  return NextResponse.json({
    spaceId: process.env.CONTENTFUL_SPACE_ID ? '✅ Set' : '❌ Not Set',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ? '✅ Set' : '❌ Not Set',
    previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ? '✅ Set' : '❌ Not Set',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
  });
} 