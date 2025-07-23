import Image from 'next/image';
import Link from 'next/link';

interface FeaturedWorkCardProps {
  imageSrc: string;
  altText: string;
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
}

export default function FeaturedWorkCard({
  imageSrc,
  altText,
  tag,
  title,
  description,
  tagColor = '#69D4FF'
}: FeaturedWorkCardProps) {
  return (
    <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
      <div className="p-4">
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          <Image 
            src={imageSrc}
            alt={altText}
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      
      <div className="p-6 pt-0 flex flex-col flex-grow">
        <span 
          className="inline-block px-2 py-1 text-xs font-semibold rounded-full uppercase mb-2" 
          style={{ color: tagColor, backgroundColor: `${tagColor}10` }}
        >
          {tag}
        </span>
        <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
        <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">{description}</p>
        
        <Link
          href="#"
          className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
          aria-label={`View ${title} project`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
