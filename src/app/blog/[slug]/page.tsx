import { notFound } from 'next/navigation';

// This tells Next.js to render this page at build time
export const dynamic = 'auto';

// This tells Next.js to not try to revalidate this page
export const revalidate = false;

// This tells Next.js to not attempt to render this page on the server
export const dynamicParams = false;

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  // Return an empty array to indicate no dynamic paths should be pre-rendered
  return [];
}

export default function BlogPost() {
  // This will show a 404 page
  notFound();
  return null;
}