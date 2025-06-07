import { notFound } from 'next/navigation';

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  // Return an empty array since we're not pre-rendering any blog posts
  return [];
}

export const dynamic = 'force-static';

export default function BlogPost() {
  notFound();
  return null;
}