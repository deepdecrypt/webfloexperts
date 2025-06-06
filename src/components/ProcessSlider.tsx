"use client";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    label: "Research",
    title: "We research your market.",
    desc: "Our team dives deep into your industry to uncover the best opportunities for your business.",
    img: "/process-research.svg",
    step: "Step 01",
    bg: "bg-blue-50"
  },
  {
    label: "Plan",
    title: "We map out content that ranks.",
    desc: "Our proprietary AI platform scrapes millions of top-ranking pages, and creates outlines that match exactly what your audience is searching for.",
    img: "/process-plan.svg",
    step: "Step 02",
    bg: "bg-blue-100"
  },
  {
    label: "Create",
    title: "We create high-quality content.",
    desc: "Our expert writers and designers craft engaging, SEO-optimized content tailored to your brand.",
    img: "/process-create.svg",
    step: "Step 03",
    bg: "bg-blue-50"
  },
  {
    label: "Publish",
    title: "We publish and optimize.",
    desc: "Content is published on your site with technical SEO best practices for maximum visibility.",
    img: "/process-publish.svg",
    step: "Step 04",
    bg: "bg-blue-100"
  },
  {
    label: "Analyze",
    title: "We analyze performance.",
    desc: "We track results and provide actionable insights to continually improve your content strategy.",
    img: "/process-analyze.svg",
    step: "Step 05",
    bg: "bg-blue-50"
  }
];

export default function ProcessSlider() {
  const [active, setActive] = useState(1); // Start at step 2 for demo
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Pause auto-advance on hover
  const pause = () => intervalRef.current && clearInterval(intervalRef.current);
  const resume = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-0 md:px-0">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 rounded-2xl p-4 mb-10 shadow-sm backdrop-blur-md">
          {steps.map((step, i) => (
            <button
              key={step.label}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 border backdrop-blur-md
                ${active === i
                  ? "bg-transparent text-white border-[2px] border-[#69D4FF]"
                  : "bg-gradient-to-r from-white/5 to-white/0 text-gray-200 border-white/10 hover:bg-white/10"}
              `}
              onClick={() => setActive(i)}
              aria-selected={active === i}
            >
              {step.label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div
          className={`relative w-full rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 transition-all duration-500 shadow-xl backdrop-blur-md min-h-[320px] overflow-hidden`}
        >
          {/* Gradient Overlay Effect - matches 'What we do' cards */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
          {/* Left: Text */}
          <div className="relative z-10 flex-1 min-w-[260px] max-w-xl">
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">
              <span className="text-accent font-bold">Step</span> {steps[active].step.replace('Step ', '')}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{steps[active].title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{steps[active].desc}</p>
          </div>
          {/* Right: Image (placeholder SVG/box) */}
          <div className="relative z-10 flex-1 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
            {/* Placeholder illustration */}
            <div className="w-[340px] h-[200px] bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center shadow-md backdrop-blur-md">
              <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="160" height="70" rx="8" fill="#23272e" stroke="#69D4FF" strokeWidth="2"/>
                <rect x="25" y="30" width="110" height="10" rx="4" fill="#3F7F99" />
                <rect x="25" y="48" width="90" height="10" rx="4" fill="#69D4FF" />
                <rect x="25" y="66" width="60" height="10" rx="4" fill="#3F7F99" />
                <circle cx="155" cy="35" r="6" fill="#69D4FF" />
                <rect x="145" y="30" width="20" height="12" rx="4" fill="#23272e" />
                <rect x="145" y="48" width="20" height="12" rx="4" fill="#23272e" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 