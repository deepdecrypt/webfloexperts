import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

if (!space || !accessToken) {
  throw new Error('Contentful space ID and access token are required');
}

export const contentfulClient = createClient({
  space,
  accessToken,
  environment,
});

export const previewClient = createClient({
  space,
  accessToken: previewToken || accessToken,
  environment,
  host: 'preview.contentful.com',
});

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

// Helper functions
export async function getBlogPosts(preview = false) {
  const client = preview ? previewClient : contentfulClient;
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  });
  return response.items;
}

export async function getBlogPostBySlug(slug: string, preview = false) {
  const client = preview ? previewClient : contentfulClient;
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  return response.items[0];
} 