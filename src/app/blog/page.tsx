// This tells Next.js to generate a static version of this page
export const dynamic = 'error';

// This prevents this page from being statically generated at request time
export const dynamicParams = false;

// This tells Next.js to not try to revalidate this page
export const revalidate = false;

export default function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
          Blog Coming Soon
        </h1>
        <p className="text-xl text-gray-300">
          We're working on something great. Please check back later!
        </p>
      </div>
    </div>
  );
}