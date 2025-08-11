"use client";

import Image from "next/image";
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import ProcessSlider from "@/components/ProcessSlider";
import { useState } from 'react';
import CaseStudyCard from "@/components/CaseStudyCard";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [membershipTab, setMembershipTab] = useState('Standard');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col sm:flex-row items-center justify-center px-2 sm:px-4 md:px-8">
          {/* On mobile, show text block above image. On sm+, overlay text on image. */}
          <div className="block sm:hidden w-full">
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center px-2 text-center pt-12">
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
                href="/pricing"
                className="pointer-events-auto px-8 py-3 rounded-xl text-lg font-semibold text-black bg-white shadow-lg hover:bg-gray-100 transition-all border border-white flex items-center gap-2"
                style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
              >
                See Pricing <span className="ml-1 text-xl">&rarr;</span>
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
                href="/pricing"
                className="pointer-events-auto px-8 py-3 rounded-xl text-lg font-semibold text-black bg-white shadow-lg hover:bg-gray-100 transition-all border border-white flex items-center gap-2"
                style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
              >
                See Pricing <span className="ml-1 text-xl">&rarr;</span>
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
        <section className="py-20 bg-black text-white">
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
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden">
                <img src="/services/MM Flowbase.png" alt="B2B Web Design" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Websites, CMS & eCom</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    A premium website isn’t optional. It’s how you earn trust and drive conversions.
                  </p>
                </div>
              </div>

              {/* Card 2: Webflow Development */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden">
                <img src="/services/MM Flowbase 2.png" alt="Webflow Development" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">MVP Development</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    The right MVP saves time and money. Low-code helps you build, test, and improve faster.
                  </p>
                </div>
              </div>

              {/* Card 3: Ongoing Support */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
                <img src="/services/MM Flowbase 3.png" alt="Ongoing Support" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">SEO, CRO & Organic Growth</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    Without traffic, your website’s just a brochure. SEO turns visits into revenue.
                  </p>
                </div>
              </div>

              {/* Card 4: Website Strategy */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
                <img src="/services/MM Flowbase 4.png" alt="Website Strategy" className="w-full h-40 object-cover rounded-t-xl" />
                <div className="flex flex-col h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">AI & Workflow Automation</h3>
                  <p className="text-white/70 text-xs md:text-base leading-relaxed flex-grow font-normal">
                    Automation triples your output from lead follow-ups to order tracking, and scale like never before.
                  </p>
                </div>
              </div>

              {/* Card 5: Website Migration */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
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
        <section className="py-20 text-white border-t border-b border-[#23272e]" style={{ background: 'linear-gradient(to bottom,rgb(5, 56, 85),rgba(0, 25, 32, 0.4))' }}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="mb-16">
              <h2 className="text-lg md:text-5xl font-medium leading-tight">
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
                  title: 'AI-Powered Pipeline',
                  description: 'AI calling agent automates sales, support, and follow-ups so you save time.',
                },
                {
                  icon: (
                    // Lock Icon (Secure by Default)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <rect x="6" y="10" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V7a3 3 0 016 0v3" />
                    </svg>
                  ),
                  title: 'Secure by Default',
                  description: 'SSL, bot protection, and GDPR compliance to keep your site safe.',
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

        {/* Duplicated Services Section (after What Makes Us Stand Out) */}
        <section className="py-20 bg-black text-white" id="our-works">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'image 96.png',
                'image 95.png',
                'image 93.png',
                'image 92.png',
                'image 91.png',
                'image 90.png',
                'image 89.png',
                'image 88.png',
                'Group 43046.png',
                'Frame 427321906.png',
                'Frame 427321905.png',
              ].map((img, i) => {
                // Generate a title from the filename
                const title = img.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                return (
                  <div key={img} className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
                    <div className="p-4 flex items-center justify-center w-full" style={{ minHeight: '200px', background: '#222' }}>
                      <img
                        src={`/work/${img}`}
                        alt={title}
                        className="max-w-full max-h-80 object-contain"
                        style={{ display: 'block' }}
                      />
                    </div>
                    <div className="p-6 pt-6 flex flex-col flex-grow">
                      {/* Label */}
                      <span className="inline-block py-1 text-xs font-semibold rounded uppercase" style={{ color: '#69D4FF' }}>FEATURED WORK</span>
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
                      {/* Description */}
                      <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">This is a featured project image. Replace this with a real description if desired.</p>
                      {/* Arrow Link */}
                      <Link
                        href="#"
                        className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
              {/* Full-width card at the end */}

            </div>
          </div>
        </section>

        {/* Vertical Case Studies - stacked cards */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-xl space-y-12">
            {[
              {
                category: 'TRANSPORTATION & LOGISTICS',
                country: '🇫🇷',
                title: 'Linkbycar raised €1.4M in funding and strengthened its market position',
                quote: 'Halo Lab has a very diverse range of skills and always finds a solution to exposed issues. They delivered the project on time and with respect to schedule.',
                personName: 'Saidou Soumare',
                personRole: 'CTO at Linkbycar',
                avatarUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
                imageSrc: '/work/Frame 427321905.png',
              },
              {
                category: 'HEALTHCARE',
                country: '🇺🇸',
                title: 'Chawellness website redesign led to 23% organic traffic growth',
                quote: 'They kept the momentum high and executed with care. The improved UX directly impacted conversions.',
                personName: 'Mira Patel',
                personRole: 'Marketing Lead',
                avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
                imageSrc: '/work/image 92.png',
              },
              {
                category: 'EDTECH',
                country: '🇬🇧',
                title: 'MentorMatch onboarding simplification improved activation by 1.5×',
                quote: 'From research to production, the team handled everything seamlessly and shipped fast.',
                personName: 'John Davis',
                personRole: 'Product Manager',
                avatarUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
                imageSrc: '/work/image 90.png',
              },
            ].map((item, index) => (
              <CaseStudyCard
                key={item.title}
                category={item.category}
                country={item.country}
                title={item.title}
                quote={item.quote}
                personName={item.personName}
                personRole={item.personRole}
                avatarUrl={item.avatarUrl}
                imageSrc={item.imageSrc}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* Client Testimonials and Stats Section - Grid Layout */}
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
    <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
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
    <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
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
    <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
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



        {/* Our Process Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <span className="text-accent text-sm uppercase tracking-widest font-semibold">• OUR PROCESS</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">What our system looks like.</h2>
            </div>
            <div className="w-full">
              <ProcessSlider />
            </div>
          </div>
        </section>

        {/* Membership Pricing */}
        <PricingSection />

        {/* Integrations Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Top Section: Heading and Tabs */}
            <div className="text-center mb-12">
              <span className="text-accent text-sm uppercase tracking-widest font-semibold mb-4 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                Why Integrate?
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight text-center">
                Learn more about popular integrations
              </h2>

              {/* Tabs/Filter */}
              <div className="flex justify-center mt-8 overflow-x-auto pb-4">
                <div className="flex space-x-4 bg-white/[0.05] rounded-full p-1 border border-white/10">
                  {['All', 'Webflow Dev', 'SEO', 'Web Design', 'Branding', 'Migration'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-2 rounded-full text-sm font-semibold flex-shrink-0 ${activeTab === tab ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/[0.05]'} transition-colors`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section: Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-0 border-b-0">
              {['Hubspot', 'Salesforce', 'Zapier', 'Google Analytics', 'Mixpanel', 'Segment', 'Mailchimp', 'Pardot', 'ActiveCampaign', 'Shopify', 'Greenhouse', 'Marketo'].map((name, index) => {
                const isLastColumnSm = (index + 1) % 2 === 0;
                const isLastColumnMd = (index + 1) % 3 === 0;
                const isLastColumnLg = (index + 1) % 4 === 0;
                const isLastColumnXl = (index + 1) % 4 === 0;

                return (
                  <div key={name} className={`bg-white/[0.02] rounded-none p-4 flex flex-col items-center justify-center text-gray-300 border border-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      {name !== 'And more' ? (
                        <div className="w-12 h-12 mb-3 flex items-center justify-center text-gray-500">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 12.8954 12 11.7908 12H10V14H11.7908C14.5523 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="currentColor" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-10 h-10 mb-2 flex items-center justify-center text-gray-500 text-2xl font-bold">
                          ...
                        </div>
                      )}
                      <span className="text-base font-semibold text-white">{name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Frequently Asked Questions</h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-white"
                  onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                >
                  How long does it take to build a Webflow website?
                  <svg
                    className={`w-5 h-5 transition-transform transform ${openFAQ === 1 ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 1 && (
                  <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                    The timeline for building a Webflow website varies depending on the complexity of the design, features, and content. A simple marketing site might take 4-6 weeks, while a more complex site with custom features could take 8-12 weeks or longer.
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-white"
                  onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                >
                  What is the cost of a Webflow website?
                  <svg
                    className={`w-5 h-5 transition-transform transform ${openFAQ === 2 ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 2 && (
                  <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                    Website costs depend on the scope of work, design complexity, and required features. We provide custom quotes after understanding your specific needs during a consultation. Our projects typically start from $X,XXX.
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-white"
                  onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                >
                  Do you provide ongoing support and maintenance?
                  <svg
                    className={`w-5 h-5 transition-transform transform ${openFAQ === 3 ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 3 && (
                  <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                    Yes, we offer ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally after launch.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Agency Info */}
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Black Peak is a design & development agency based in Vancouver, Canada.
              </h3>
              {/* Enterprise Partner Badge Placeholder */}
              <div className="mt-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold rounded bg-blue-600 text-white">
                  Webflow Enterprise Partner
                </span>
              </div>
            </div>

            {/* Right Side: Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Services Column */}
              <div>
                <h4 className="font-semibold text-gray-400 uppercase tracking-widest mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Custom Webflow Experiences</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Landing Page Roast</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Migrate to Webflow</Link></li>
                </ul>
              </div>

              {/* Case Studies Column */}
              <div>
                <h4 className="font-semibold text-gray-400 uppercase tracking-widest mb-4">Case Studies</h4>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Ad Auris</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Lexselect</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Arini AI</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Codefortify</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Raven DAO</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Audette</Link></li>
                </ul>
              </div>

              {/* About Us Column */}
              <div>
                <h4 className="font-semibold text-gray-400 uppercase tracking-widest mb-4">About Us</h4>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Webflow</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">X</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
