import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    spaceId: process.env.CONTENTFUL_SPACE_ID ? '✅ Set' : '❌ Not Set',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ? '✅ Set' : '❌ Not Set',
    previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ? '✅ Set' : '❌ Not Set',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
  });
} 