import { createClient } from 'contentful';

// Get environment variables
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master';

// Log environment variables (for debugging)
console.log('Contentful Config:', {
  space: space ? '✓ Set' : '✗ Missing',
  accessToken: accessToken ? '✓ Set' : '✗ Missing',
  previewToken: previewToken ? '✓ Set' : '✗ Missing',
  environment
});

// Create clients only if credentials are available
export const contentfulClient = space && accessToken
  ? createClient({
      space,
      accessToken,
      environment,
    })
  : null;

export const previewClient = space && (previewToken || accessToken)
  ? createClient({
      space,
      accessToken: previewToken || accessToken,
      environment,
      host: 'preview.contentful.com',
    })
  : null;

// Content type interfaces
export interface BlogPost {
  title: string;
  slug: string;
  content: any;
  excerpt: string;
  featuredImage?: {
    url: string;
    title: string;
  };
  publishDate: string;
  author?: string;
}

// Helper functions with error handling
export async function getBlogPosts(preview = false) {
  if (!contentfulClient) {
    console.error('Contentful client not initialized. Please check your environment variables.');
    return [];
  }

  try {
    const client = preview ? previewClient : contentfulClient;
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, preview = false) {
  if (!contentfulClient) {
    console.error('Contentful client not initialized. Please check your environment variables.');
    return null;
  }

  try {
    const client = preview ? previewClient : contentfulClient;
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });
    return response.items[0];
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
} 