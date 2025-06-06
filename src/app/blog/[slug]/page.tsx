import { getBlogPostBySlug } from '@/lib/contentful';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        {post.fields.featuredImage && (
          <div className="relative h-[60vh] mb-12 rounded-2xl overflow-hidden">
            <img
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.featuredImage.fields.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkGlass via-darkGlass/50 to-transparent" />
          </div>
        )}
        <div className="backdrop-blur-glass bg-darkGlass/50 border border-borderGlass rounded-2xl p-8 shadow-glass">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            {post.fields.title}
          </h1>
          <div className="flex items-center text-gray-300 mb-8">
            <span className="text-lg">{new Date(post.fields.publishDate).toLocaleDateString()}</span>
            {post.fields.author && (
              <>
                <span className="mx-2">•</span>
                <span className="text-lg">By {post.fields.author}</span>
              </>
            )}
          </div>
          <div className="prose prose-lg max-w-none prose-invert">
            {post.fields.content}
          </div>
        </div>
      </article>
    </div>
  );
} 