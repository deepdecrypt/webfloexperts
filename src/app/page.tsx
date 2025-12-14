"use client";

import Image from "next/image";
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import ProcessSlider from "@/components/ProcessSlider";
import { useState, useEffect } from 'react';
import CaseStudyCard from "@/components/CaseStudyCard";
import PricingSection from "@/components/PricingSection";

const CASE_STUDIES = [
  {
    category: 'EDTECH',
    title: 'The foundation that helped us hit $1M ARR',
    quote: 'They built our full MVP, website, and AI workflows. The systems they created became the backbone of our early scale and played a huge role in helping us reach $1M ARR.',
    personName: 'Aniket Roy',
    personRole: 'Head of Marketing at Mentor Match',
    avatarUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
    imageSrc: '/work/mentormatch.png',
    projectUrl: 'https://mentormatch.com'
  },
  {
    category: 'DESIGN AGENCY',
    title: 'Reliable development partner for our design team',
    quote: 'We needed a team that could match our design pace. They integrated into our workflow and helped us deliver projects consistently without bottlenecks.',
    personName: 'Arjun Patel',
    personRole: 'Creative Director at UXGear',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    imageSrc: '/work/uxgear.png',
    projectUrl: 'https://uxgear.in'
  },
  {
    category: 'REAL ESTATE',
    title: 'Streamlined our lead management process',
    quote: 'Our lead tracking was manual and inconsistent. They set up a website and automation system that made our follow-ups structured and reliable.',
    personName: 'Vikram Singh',
    personRole: 'Principal Broker at 5 Pillars Realty',
    avatarUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
    imageSrc: '/work/5pillars.png',
    projectUrl: 'https://5pillarsrealty.com'
  },
  {
    category: 'ENTERPRISE SYSTEMS',
    title: 'Digitized employee food court with RFID & Low Code',
    quote: 'They built a complete food court management system for our in-house employees using RFID and low-code apps. It streamlined our entire cafeteria operations seamlessly.',
    personName: 'Siddharth Gupta',
    personRole: 'Operations Lead at Lao Brewery',
    avatarUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    imageSrc: '/work/lao.png',
    projectUrl: 'https://beerlao.la/'
  },
  {
    category: 'SAAS',
    title: 'They built our website and outbound engine the right way',
    quote: 'They rebuilt our site, refined our messaging, and set up a full outbound strategy. It finally gave structure to our pipeline and boosted our GTM momentum.',
    personName: 'Aditya Verma',
    personRole: 'Marketing Head at OpMaint',
    avatarUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    imageSrc: '/work/opmaint.png',
    projectUrl: 'https://opmaint.com'
  },
  {
    category: 'AGRI TOURISM & E-COMMERCE',
    title: 'Farm stays & fresh produce marketplace',
    quote: 'They built a unified platform for booking farm stays and ordering fresh vegetables directly from the source. A complex dual-sided marketplace launched in record time.',
    personName: 'Rajesh Kumar',
    personRole: 'Founder at Skyo',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    imageSrc: '/work/skyo.png',
    projectUrl: 'https://skyo.com'
  },
  {
    category: 'SAAS',
    title: 'Helped us look like a serious player in our market',
    quote: 'They delivered our website, SEO work, and automation setup for Sahlak. The new presence helped us position strongly in the Oman market.',
    personName: 'Sameer Khan',
    personRole: 'Founder at Sahlak',
    avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
    imageSrc: '/work/sahllak.png',
    projectUrl: 'https://sahlak.com'
  },
  {
    category: 'D2C TEA BRAND',
    title: 'Scaling a premium tea brand globally',
    quote: 'They handled our D2C storefront, subscription flows, and global SEO. Our tea sales skyrocketed, and the backend automation handles thousands of orders effortlessly.',
    personName: 'Suresh Reddy',
    personRole: 'Founder at CHA Wellness',
    avatarUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
    imageSrc: '/work/cha.png',
    projectUrl: 'https://chawellness.in'
  },
  {
    category: 'AGENCY',
    title: 'They became a true extension of our agency',
    quote: 'We hired them for a website, but they rebuilt our whole backend—automation, CRM, outbound, funnels. Our operations now run on the systems they built.',
    personName: 'Ravi Mehta',
    personRole: 'Director at Cloutgency',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    imageSrc: '/work/cloutgency.png',
    projectUrl: 'https://cloutgency.com'
  },
  {
    category: 'REAL ESTATE',
    title: 'Their system helped us close high-ticket deals',
    quote: 'They built our marketplace and automation workflows end-to-end. The platform directly supported multiple high-value real estate deals in Dubai.',
    personName: 'Kabir Ahmed',
    personRole: 'CEO at Noor Saray',
    avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
    imageSrc: '/work/noorsaray.png',
    projectUrl: 'https://noorsaray.com'
  },
  {
    category: 'DÉCOR',
    title: 'We started getting inbound leads for the first time',
    quote: 'With the new website, SEO setup, and automations, inbound leads started coming within weeks. A huge shift for our décor business.',
    personName: 'Amit Bansal',
    personRole: 'Founder at Decorgeous',
    avatarUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
    imageSrc: '/work/decorgeous.png',
    projectUrl: 'https://decorgeous.com'
  },
  {
    category: 'HOSPITALITY',
    title: 'A website that actually drives bookings now',
    quote: 'The new site, SEO structure, and automations immediately started bringing in bookings. Clean, simple, and effective.',
    personName: 'Manoj Fernandez',
    personRole: 'Owner at Kresort',
    avatarUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
    imageSrc: '/work/kresort.png',
    projectUrl: 'https://kresort.com'
  },
  {
    category: 'DTC HEALTH',
    title: 'The automation became our growth engine',
    quote: 'They built our DTC site and full automation + SEO stack. It wasn’t just a website—it\'s the system that drives our education and conversions.',
    personName: 'Karthik Iyer',
    personRole: 'Marketing Director at Everealth',
    avatarUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
    imageSrc: '/work/everealth.png',
    projectUrl: 'https://everrealth.com'
  },
  {
    category: 'REAL ESTATE TECH',
    title: 'A rebrand that changed how users understand us',
    quote: 'They led a complete rebrand and redesigned our product flows end to end. User clarity improved immediately, and so did conversions.',
    personName: 'Rahul Sharma',
    personRole: 'Product Lead at Settlin',
    avatarUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
    imageSrc: '/work/settlin.png',
    projectUrl: 'https://settlin.in'
  }
];

const FAQS = [
  {
    question: "What is WebfloExperts?",
    answer: "WebfloExperts is a growth-focused web and GTM agency helping businesses maintain, improve, and scale their digital products. We work across design, development, SEO, AI-driven automation, and MVP builds — using Webflow for the fastest go-to-market, and custom development when required."
  },
  {
    question: "Why do you prefer Webflow for most projects?",
    answer: "We prefer Webflow for speed and rapid GTM execution. It allows us to design, build, test, and iterate quickly. For most marketing sites, landing pages, and early-stage products, Webflow helps launch faster and validate ideas sooner."
  },
  {
    question: "Do you also do custom development?",
    answer: "Yes. We handle custom development when a project requires advanced logic, backend systems, or complex integrations. We choose the stack based on your business needs, not a fixed tool."
  },
  {
    question: "Do you offer AI automation services?",
    answer: "Yes. We build AI-powered automation to improve lead handling, operations, and internal workflows. This includes AI-assisted lead qualification, automated follow-ups, content workflows, and intelligent integrations with your CRM and tools."
  },
  {
    question: "What’s the difference between Development, Growth, and Scale plans?",
    answer: "Each plan supports a different stage of growth:\n• Development: Website maintenance and updates\n• Growth: Design, SEO, copywriting, automation, and AI workflows\n• Scale: Full GTM execution including CRO, AI automation, A/B testing, and MVP builds"
  },
  {
    question: "What does “average turnaround time” mean?",
    answer: "It’s the typical time taken to complete a task once it’s started:\n• Development: ~72 hours\n• Growth: ~48 hours\n• Scale: ~32 hours (priority delivery)\n\nComplex tasks may take longer, but timelines are always shared upfront."
  },
  {
    question: "How does task execution work?",
    answer: "You submit requests through a shared task board or communication channel. Tasks are worked on sequentially to ensure focus, quality, and predictable delivery."
  },
  {
    question: "Is there a limit to how many requests I can submit?",
    answer: "You can submit unlimited requests, but we work on one active task at a time per plan."
  },
  {
    question: "Is design included in all plans?",
    answer: "Design coverage depends on the plan:\n• Development: No design or graphic assets\n• Growth: Web design and graphic assets included\n• Scale: Full UI/UX design, branding assets, and conversion-focused layouts"
  },
  {
    question: "Do you provide SEO and CRO services?",
    answer: "Yes:\n• Growth: Technical and on-page SEO\n• Scale: Full SEO and CRO, including content optimization and A/B testing funnels"
  },
  {
    question: "What kind of automation do you build?",
    answer: "We build both workflow and AI-driven automation, including:\n• CRM integrations\n• AI-powered lead qualification\n• Email, WhatsApp, and chatbot workflows\n• Funnel automation connected to your website\n• AI-assisted internal operations"
  },
  {
    question: "Can WebfloExperts help with MVP development?",
    answer: "Yes. MVP design and development are included in the Scale plan, ideal for startups and teams launching quickly."
  },
  {
    question: "Is there a minimum contract or lock-in period?",
    answer: "No. All plans are monthly. You can pause, cancel, upgrade, or downgrade at any time."
  },
  {
    question: "How long should I work with WebfloExperts to see results?",
    answer: "We recommend a minimum of 6 months to see meaningful results from SEO, automation, AI workflows, CRO, and GTM execution."
  },
  {
    question: "Who is WebfloExperts best suited for?",
    answer: "WebfloExperts is a strong fit for:\n• Startups and SaaS teams\n• Founders launching MVPs\n• Businesses needing fast GTM execution\n• Teams that want Webflow speed, AI automation, and custom flexibility when required"
  }
];

const CaseStudySkeleton = () => (
  <div className="w-full bg-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row mt-6 md:mt-10 border border-white/10 animate-pulse">
    <div className="w-full md:w-1/2 h-64 md:h-auto bg-white/10" />
    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-4">
      <div className="h-4 w-24 bg-white/10 rounded" />
      <div className="h-8 w-3/4 bg-white/10 rounded" />
      <div className="h-20 w-full bg-white/10 rounded" />
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full bg-white/10" />
        <div className="space-y-2">
          <div className="h-3 w-32 bg-white/10 rounded" />
          <div className="h-2 w-24 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [membershipTab, setMembershipTab] = useState('Standard');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    CASE_STUDIES.forEach((study) => {
      const img = new window.Image();
      img.src = study.imageSrc;
    });
  }, []);

  const nextCaseStudy = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCaseStudy((prev) => (prev + 1) % CASE_STUDIES.length);
      setIsTransitioning(false);
    }, 2000);
  };

  const prevCaseStudy = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCaseStudy((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
      setIsTransitioning(false);
    }, 2000);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextCaseStudy();
    }
    if (isRightSwipe) {
      prevCaseStudy();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* JSON-LD Schema Markup for SEO and LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://webfloexperts.com/#organization",
                "name": "Webfloexperts",
                "url": "https://webfloexperts.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://webfloexperts.com/wxlogo.svg",
                  "width": 200,
                  "height": 60
                },
                "description": "Go-to-market focused web development agency helping modern brands get their first sale through high-performing websites, MVPs, and automation.",
                "email": "contact@webfloexperts.com",
                "telephone": "+1-XXX-XXX-XXXX",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://twitter.com/webfloexperts",
                  "https://linkedin.com/company/webfloexperts",
                  "https://instagram.com/webfloexperts"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-XXX-XXX-XXXX",
                  "contactType": "Customer Service",
                  "email": "contact@webfloexperts.com",
                  "availableLanguage": ["English"]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://webfloexperts.com/#website",
                "url": "https://webfloexperts.com",
                "name": "Webfloexperts",
                "description": "Launch your website & drive leads 10x faster",
                "publisher": {
                  "@id": "https://webfloexperts.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://webfloexperts.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://webfloexperts.com/#localbusiness",
                "name": "Webfloexperts",
                "image": "https://webfloexperts.com/hero/hero.png",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "0.0",
                  "longitude": "0.0"
                },
                "url": "https://webfloexperts.com",
                "telephone": "+1-XXX-XXX-XXXX",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ]
              },
              {
                "@type": "Service",
                "serviceType": "Custom Website Development",
                "provider": {
                  "@id": "https://webfloexperts.com/#organization"
                },
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Web Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Websites",
                        "description": "High-performing custom websites built to drive sales and conversions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Pages",
                        "description": "Conversion-optimized landing pages tailored to your ICP"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "MVP Development",
                        "description": "Build MVPs that hit product-market fit faster"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO & CRO",
                        "description": "Search engine optimization and conversion rate optimization services"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Webflow & Shopify Migrations",
                        "description": "Seamless platform migrations to Webflow and Shopify"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Marketing Automations",
                        "description": "Automated marketing workflows to scale your business"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Automations",
                        "description": "AI-powered automation solutions for modern businesses"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does it take to build a Webflow website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The timeline for building a Webflow website varies depending on the complexity of the design, features, and content. A simple marketing site might take 4-6 weeks, while a more complex site with custom features could take 8-12 weeks or longer."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the cost of a Webflow website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Website costs depend on the scope of work, design complexity, and required features. We provide custom quotes after understanding your specific needs during a consultation. Our projects typically start from $X,XXX."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide ongoing support and maintenance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally after launch."
                    }
                  }
                ]
              },
              {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              }
            ]
          })
        }}
      />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col sm:flex-row items-center justify-center px-2 sm:px-4 md:px-8">
          {/* On mobile, show text block above image. On sm+, overlay text on image. */}
          <div className="block sm:hidden w-full">
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center px-2 text-center pt-12 relative z-10">
              {/* Badge */}
              <span className="inline-block bg-black/80 text-white px-4 sm:px-8 py-1.5 rounded-full text-sm sm:text-lg font-normal shadow-md mb-4 sm:mb-8 pointer-events-auto" style={{ border: '1.5px solid #232326' }}>
                Skip Dev Team. Save Time. Drive Results.
              </span>
              {/* Heading */}
              <h1 className="text-3xl md:text-7xl font-medium leading-tight text-white mb-4 pointer-events-auto" style={{ lineHeight: 1.1 }}>
                Launch Your Website<br />
                <span className="bg-gradient-to-b from-white to-[#7fdaff] text-transparent bg-clip-text">&amp; Drive Leads 10x Faster</span>
              </h1>
              {/* Subheading */}
              <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-white/80 pointer-events-auto">
                We move the needle with websites that drive sales, MVPs that hit product–market fit, and automation that scales your business.
              </p>
              {/* CTA Button */}
              <a
                href="#pricing"
                className="pointer-events-auto px-8 py-3 rounded-xl text-lg font-semibold text-black bg-white shadow-lg hover:bg-gray-100 transition-all border border-white flex items-center gap-2"
                style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
              >
                See Pricing <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <img src="/hero/hero.png" alt="Hero" className="w-full h-auto object-contain mt-[-100px] sm:mt-0" style={{ display: 'block' }} />
          {/* Overlay Content for sm+ */}
          <div className="hidden sm:flex absolute top-0 left-0 w-full flex-col items-center pointer-events-none">
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center px-4 text-center pt-[60px] md:pt-[100px]">
              {/* Badge */}
              <span className="inline-block bg-black/80 text-white px-4 sm:px-8 py-1.5 rounded-full text-sm sm:text-lg font-normal shadow-md mb-4 sm:mb-8 pointer-events-auto" style={{ border: '1.5px solid #232326' }}>
                Skip Dev Team. Save Time. Drive Results.
              </span>
              {/* Heading */}
              <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white mb-4 pointer-events-auto" style={{ lineHeight: 1.1 }}>
                Launch Your MVP<br />
                <span className="bg-gradient-to-b from-white to-[#7fdaff] text-transparent bg-clip-text">&amp; Website 10x Faster</span>
              </h1>
              {/* Subheading */}
              <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-white/80 pointer-events-auto">
                We move the needle with websites that drive sales, MVPs that hit product–market fit, and automation that scales your business.
              </p>
              {/* CTA Button */}
              <a
                href="#pricing"
                className="pointer-events-auto px-8 py-3 rounded-xl text-lg font-semibold text-black bg-white shadow-lg hover:bg-gray-100 transition-all border border-white flex items-center gap-2"
                style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
              >
                See Pricing <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          {/* Black Shade SVG Overlay at Bottom */}
          <img src="/hero/Black Shade UI Kit.svg" alt="Black Shade Overlay" className="absolute left-0 bottom-0 w-full pointer-events-none" style={{ zIndex: 2 }} />
        </section>

        {/* Client Logos/Trust Bar Section */}
        <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center mb-8 w-full">
              <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold w-full text-center">Trusted by Brands Worldwide</span>
            </div>
            {/* Logos - Horizontal Auto-Scroll using react-fast-marquee */}
            <Marquee
              gradient={false}
              speed={40}
              direction="left"
              pauseOnHover={true}
              className="py-4"
            >
              <ul className="flex items-center [&_li]:mx-8">
                {[
                  'www.vsttractors.com.png',
                  'www.sahllak.com.png',
                  'www.radical-rcm.com.png',
                  'www.opmaint.com.png',
                  'www.noorsaray.com.png',
                  'www.mentormatch.com.png',
                  'www.cloutgency.com.png',
                  'www.chawellness.in.png',
                  'uxgear.in.png',
                  'www.deepdecrypt.com.png',
                  'settlin.in.png',
                  '5pillarsrealty.com.png',
                ].map((logo, i) => {
                  const domain = logo.replace(/\.(png|jpg|jpeg|svg|webp|avif)$/i, '');
                  const url = domain.startsWith('www.') ? `https://${domain}` : `https://www.${domain}`;
                  return (
                    <li key={logo + i} className="flex items-center justify-center">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-center h-16 w-32 overflow-hidden bg-transparent">
                          <img
                            src={`/logo/${logo}`}
                            alt={domain}
                            className={`
                              ${logo === 'www.mentormatch.com.png' ? 'h-20' :
                                logo === 'www.chawellness.in.png' || logo === 'www.deepdecrypt.com.png' ? 'h-12' : 'h-full'}
                              w-auto object-contain`
                            }
                            style={{}}
                          />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Marquee>
          </div>
        </section>

        {/* What we do Section (restored) */}
        <section id="what-we-do" className="py-20 bg-black text-white">
          {/* Reduced overall width with max-w-screen-lg */}
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#69D4FF' }}>+ FULL SERVICE AGENCY</span>
              <h2 className="text-lg md:text-4xl font-medium text-white mb-4 leading-tight max-w-[95vw] md:max-w-none mx-auto">
                We build high-performing websites that<br />
                actually drive traffic, attract leads, and<br />
                accelerate business growth.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Card 1: B2B Web Design */}
              <div className="backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <img src="/services/MM Flowbase.png" alt="B2B Web Design" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Websites, CMS & eCom</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    A premium website isn’t optional. It’s how you earn trust and drive conversions.
                  </p>
                </div>
              </div>

              {/* Card 2: Webflow Development */}
              <div className="backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <img src="/services/MM Flowbase 2.png" alt="Webflow Development" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">MVP Development</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    The right MVP saves time and money. Low-code helps you build, test, and improve faster.
                  </p>
                </div>
              </div>

              {/* Card 3: Ongoing Support */}
              <div className="backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <img src="/services/MM Flowbase 3.png" alt="Ongoing Support" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">SEO, CRO & Organic Growth</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    Without traffic, your website’s just a brochure. SEO turns visits into revenue.
                  </p>
                </div>
              </div>

              {/* Card 4: Website Strategy */}
              <div className="backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <img src="/services/MM Flowbase 4.png" alt="Website Strategy" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">AI & Workflow Automation</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    Automation triples your output from lead follow-ups to order tracking, and scale like never before.
                  </p>
                </div>
              </div>

              {/* Card 5: Website Migration */}
              <div className="backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <img src="/services/MM Flowbase (1).png" alt="Website Migration" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Extend & Integrate</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    Extend your stack with custom integrations, APIs, and backend logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Stand Out Section */}
        <section id="why-us" className="py-20 text-white border-t border-b border-[#23272e]" style={{ background: 'linear-gradient(to bottom,rgb(5, 56, 85),rgba(0, 25, 32, 0.4))' }}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="mb-16">
              <h2 className="text-[28px] md:text-5xl font-medium leading-tight">
                What Makes Us<br />
                Stand Out.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {[
                {
                  icon: (
                    // Lightning Bolt Icon (Launch in Weeks)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7v8l10-12h-7V2z" />
                    </svg>
                  ),
                  title: 'Launch in Weeks, Not Months',
                  description: 'Fast, marketing-ready websites so you avoid endless dev sprints.',
                },
                {
                  icon: (
                    // Checkmark Badge Icon (Marketing-Ready from Day One)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                  title: 'Marketing-Ready from Day 1',
                  description: 'SEO, Geo-targeting, and AEO for higher conversions and visibility.',
                },
                {
                  icon: (
                    // Funnel Icon (Full-Funnel Experts)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M4 8h16M6 12h12M8 16h8M10 20h4" />
                    </svg>
                  ),
                  title: 'Full-Funnel Experts',
                  description: 'Automated funnel across acquisition, activation and reactivation built to maximize growth.',
                },
                {
                  icon: (
                    // Line Graph Icon (Growth-First Thinking)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 6-6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
                    </svg>
                  ),
                  title: 'Growth-First Thinking',
                  description: 'Scalable landing pages and MVPs to quickly test and validate your ideas.',
                },
                {
                  icon: (
                    // Target Icon (Conversion-Driven Design)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ),
                  title: 'Conversion-Driven Design',
                  description: 'CTAs, forms, and flows designed to boost leads, signups, and sales.',
                },
                {
                  icon: (
                    // Bar Chart Icon (Data-Backed Decisions)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <rect x="4" y="10" width="3" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="10.5" y="6" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="17" y="13" width="3" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  ),
                  title: 'Data-Backed Decisions',
                  description: 'Heatmaps, session recording, and analytics for smarter, faster UX improvements.',
                },
                {
                  icon: (
                    // Chip/Circuit Icon (AI-Powered Pipeline)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V7a3 3 0 013-3h2M20 9V7a3 3 0 00-3-3h-2M4 15v2a3 3 0 003 3h2m10-5v2a3 3 0 01-3 3h-2" />
                    </svg>
                  ),
                  title: 'Automated Customer Engine',
                  description: 'Automating every customer touchpoint across email, WhatsApp, and your CRM.',
                },
                {
                  icon: (
                    // Rocket Icon (Go-to-Market Specific)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  ),
                  title: 'Go-To-Market Optimized',
                  description: 'Pages, funnels, and workflows built to drive early traction and fast PMF.',
                },
                {
                  icon: (
                    // Layers Icon (Scale Without Rebuilding)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-9 4v4" />
                    </svg>
                  ),
                  title: 'Scale Without Rebuilding',
                  description: 'Adaptable, modular sites that grow with your business needs.',
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-x-3 mb-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Case Studies Slider */}
        <section id="our-works" className="py-20 bg-black text-white">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#69D4FF' }}>+ OUR PORTFOLIO</span>
            <h2 className="text-lg md:text-4xl font-medium text-white mb-4 leading-tight max-w-[95vw] md:max-w-none mx-auto">
              Projects optimized with SEO,<br />
              tailored to your ICP, and built to convert at scale.
            </h2>
          </div>


          <div className="container mx-auto px-4 max-w-screen-xl">
            <div
              className="relative"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >

              {/* === CARD (FULL WIDTH MOBILE) === */}
              <div className="px-4 md:px-16">
                {isTransitioning ? (
                  <CaseStudySkeleton />
                ) : (
                  <div className="w-full bg-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row mt-6 md:mt-10 border border-white/10 animate-fadeIn">

                    {/* IMAGE TOP */}
                    <div className="w-full md:w-1/2 relative group">
                      <img
                        src={CASE_STUDIES[currentCaseStudy].imageSrc}
                        alt={CASE_STUDIES[currentCaseStudy].title}
                        className="w-full h-auto object-cover"
                      />
                      <a
                        href={CASE_STUDIES[currentCaseStudy].projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </a>
                    </div>

                    {/* TEXT BELOW */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm font-medium text-white/70 uppercase tracking-wide mb-4">
                        <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">
                          {CASE_STUDIES[currentCaseStudy].category}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-3xl font-semibold leading-tight text-white mb-4">
                        {CASE_STUDIES[currentCaseStudy].title}
                      </h3>

                      <div className="mt-auto">
                        <blockquote className="text-white/80 italic mb-6">
                          “{CASE_STUDIES[currentCaseStudy].quote}”
                        </blockquote>

                        <div className="flex items-center gap-3">
                          <img
                            src={CASE_STUDIES[currentCaseStudy].avatarUrl}
                            alt={CASE_STUDIES[currentCaseStudy].personName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {CASE_STUDIES[currentCaseStudy].personName}
                            </div>
                            <div className="text-xs text-white/70">
                              {CASE_STUDIES[currentCaseStudy].personRole}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* === INDICATORS (MOBILE + DESKTOP) === */}
              <div className="flex justify-center mt-12 space-x-2">
                {CASE_STUDIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isTransitioning) return;
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentCaseStudy(index);
                        setIsTransitioning(false);
                      }, 2000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentCaseStudy ? 'bg-white' : 'bg-white/30'
                      }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>

              {/* === MOBILE ARROWS BELOW INDICATORS === */}
              <div className="flex justify-center mt-5 gap-4 md:hidden">
                <button
                  onClick={prevCaseStudy}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextCaseStudy}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* === DESKTOP ARROWS (LEFT + RIGHT MIDDLE) === */}
              <button
                onClick={prevCaseStudy}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center border border-white/20 backdrop-blur-md"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextCaseStudy}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center border border-white/20 backdrop-blur-md"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>

        </section>

        {/* Client Testimonials and Stats Section - Grid Layout */}
        {false && (
          <section className="py-12 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#69D4FF' }}>+ CLIENT SUCCESS</span>
                <h2 className="text-lg md:text-4xl font-medium text-white mb-4 leading-tight max-w-[95vw] md:max-w-none mx-auto">
                  We get nothing but love from our partners.<br />
                  And for a reason.
                </h2>
              </div>
            </div>

            {/* Testimonials and Stats - Grid Layout */}
            {/* Implemented grid for two rows with consistent card sizes */}
            {/* Limited overall width and centered the grid, ensured subtle rounded corners on cards */}
            <div className="px-4 max-w-screen-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Stat – 23% */}
                <div className="relative h-56 overflow-hidden rounded-md border border-white/[0.08] bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d] to-[#000000] opacity-80 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-start px-8 pt-8">
                    <h3 className="text-6xl font-extrabold text-[#7FDAFF] leading-none mb-2">23%</h3>
                    <p className="text-base text-white/75">Organic Traffic Increase</p>
                  </div>
                </div>

                {/* Card 2: Testimonial – John Davis */}
                <div className="relative h-56 backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(105,212,255,0.05), rgba(63,127,153,0.05))',
                      mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)',
                      WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        alt="John Davis"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-semibold text-sm">John Davis</span>
                    </div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      Webfloexperts got us to page one for three competitive keywords in under two months. Their SEO delivers results.
                    </p>
                  </div>
                </div>

                {/* Card 3: Stat – 1.75x */}
                <div className="relative h-56 overflow-hidden rounded-md border border-white/[0.08] bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d] to-[#000000] opacity-80 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-start px-8 pt-8">
                    <h3 className="text-6xl font-extrabold text-[#7FDAFF] leading-none mb-2">1.5×</h3>
                    <p className="text-base text-white/75">Increase in Lead Submission</p>
                  </div>
                </div>

                {/* Card 4: Testimonial – Michael Chen */}
                <div className="relative h-56 backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(105,212,255,0.05), rgba(63,127,153,0.05))',
                      mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)',
                      WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/20.jpg"
                        alt="Michael Chen"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-semibold text-sm">Michael Chen</span>
                    </div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      From Shopify storefront to automation and dashboard setup, Webfloexperts handled everything seamlessly. Super responsive and truly reliable.
                    </p>
                  </div>
                </div>

                {/* Card 5: Stat – 10× */}
                <div className="relative h-56 overflow-hidden rounded-md border border-white/[0.08] bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d] to-[#000000] opacity-80 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-start px-8 pt-8">
                    <h3 className="text-6xl font-extrabold text-[#7FDAFF] leading-none mb-2">10×</h3>
                    <p className="text-base text-white/75">Faster Website Deployments</p>
                  </div>
                </div>

                {/* Card 6: Testimonial – David Smith */}
                <div className="relative h-56 backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(105,212,255,0.05), rgba(63,127,153,0.05))',
                      mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)',
                      WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/30.jpg"
                        alt="David Smith"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-semibold text-sm">David Smith</span>
                    </div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      Their growth-first mindset helped us move from MVP to scalable product without a full dev team. Highly recommend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}



        {/* Our Process Section */}
        <section className="py-2 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-lg md:text-2xl font-medium text-white mb-4 leading-tight max-w-[95vw] md:max-w-none mx-auto">
                Experts in <span style={{ color: '#69D4FF' }}>30+ tools</span> to take your business to the next level.
              </h2>
            </div>
            <div className="w-full">
              <ProcessSlider />
            </div>
          </div>
        </section>



        {/* Membership Pricing */}
        <PricingSection />



        {/* FAQ Section */}
        <section className="py-10 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#69D4FF' }}>+ FAQ</span>
              <h2 className="text-lg md:text-4xl font-medium text-white mb-4 leading-tight max-w-[95vw] md:max-w-none mx-auto">
                Get clarity before you get started.
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="backdrop-blur-md rounded-xl border border-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-white"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transition-transform transform ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 text-gray-300 border-t border-white/10 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
