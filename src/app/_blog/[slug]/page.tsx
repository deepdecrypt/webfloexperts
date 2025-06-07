import { notFound } from 'next/navigation';

export const dynamic = 'auto';
export const revalidate = false;

export async function generateStaticParams() {
  // Return a single static path with a 404 page
  return [{ slug: '404' }];
}

export default function BlogPost() {
  // This will show a 404 page
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4">404 - Blog Post Not Found</h1>
        <p className="text-xl">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
      </div>
    </div>
  );
}