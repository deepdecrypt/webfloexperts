import { notFound } from 'next/navigation';

// Generate static paths at build time
export async function generateStaticParams() {
  // Return an empty array to indicate no pages should be pre-rendered
  // This is a valid configuration for static export
  return [];
}

// This prevents this route from being statically generated at request time
export const dynamic = 'error';

export default function BlogPost() {
  // This will show a 404 page
  notFound();
  return null;
}

// This tells Next.js to not attempt to render this page on the server
export const dynamicParams = false;

// This tells Next.js to not try to revalidate this page
export const revalidate = false;