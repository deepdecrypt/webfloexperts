import Image from 'next/image';

interface CaseStudyCardProps {
  category?: string;
  country?: string; // emoji or short text
  title: string;
  quote?: string;
  personName?: string;
  personRole?: string;
  avatarUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // flip image/text order on large screens
}

export default function CaseStudyCard({
  category = 'FEATURED CASE STUDY',
  country = '',
  title,
  quote,
  personName,
  personRole,
  avatarUrl,
  imageSrc,
  imageAlt = 'Project preview',
  reverse = false,
}: CaseStudyCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
      {/* teal diagonal background accent */}
      <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-[160%] w-[55%] rotate-[-8deg] rounded-[48px]" style={{ background: 'radial-gradient(120% 100% at 30% 50%, rgba(105,212,255,0.18) 0%, rgba(0,0,0,0) 70%)' }} />

      <div className={`relative z-10 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch`}>
        {/* Text */}
        <div className="flex-1 p-6 sm:p-10 lg:p-14">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: '#69D4FF' }}>
            <span>{category}</span>
            {country ? <span className="opacity-80">{country}</span> : null}
          </div>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            {title}
          </h3>

          {/* Rating dots/stars mimic */}
          <div className="mb-6 flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD166" className="h-5 w-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          {quote ? (
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">“{quote}”</p>
          ) : null}

          {(personName || personRole) && (
            <div className="flex items-center gap-3">
              {avatarUrl ? (
                <Image src={avatarUrl} alt={personName || 'Avatar'} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10" />
              )}
              <div>
                {personName ? <p className="text-white font-semibold text-sm">{personName}</p> : null}
                {personRole ? <p className="text-white/60 text-xs">{personRole}</p> : null}
              </div>
            </div>
          )}
        </div>

        {/* Visual */}
        <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
          {/* angled background panel */}
          <div className="absolute inset-6 sm:inset-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="absolute inset-6 sm:inset-8 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Use native img for local assets to avoid layout shift issues with fill */}
            <img src={imageSrc} alt={imageAlt} className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </article>
  );
} 