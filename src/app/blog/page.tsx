import { getBlogPosts } from '@/lib/contentful';

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Our Blog</h1>
          <p className="text-xl text-gray-300">
            Latest insights and updates from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article 
              key={post.sys.id} 
              className="group backdrop-blur-glass bg-darkGlass/50 border border-borderGlass rounded-xl overflow-hidden hover:shadow-glass hover:scale-[1.02] transition-all duration-300"
            >
              {post.fields.featuredImage && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.fields.featuredImage.fields.file.url}
                    alt={post.fields.featuredImage.fields.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGlass to-transparent" />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-200">
                  {post.fields.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.fields.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {new Date(post.fields.publishDate).toLocaleDateString()}
                  </span>
                  <a
                    href={`/blog/${post.fields.slug}`}
                    className="text-accent hover:text-accent2 font-bold transition-colors duration-200 flex items-center gap-2 group/link"
                  >
                    Read More
                    <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 