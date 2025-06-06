"use client";

import Image from "next/image";
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import ProcessSlider from "@/components/ProcessSlider";
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [membershipTab, setMembershipTab] = useState('Standard');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-24 text-center overflow-hidden">
          {/* Removed background gradient layer */}

          <div className="container mx-auto px-4 z-10 relative">
            {/* Tag */}
            <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-accent uppercase tracking-wide">
              + Design and Webflow Agency
            </span>

            {/* Main Heading - Reverted to old gradient style */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Webflow websites that convert <br className="hidden md::block"/> and scale for high-growth B2B
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 opacity-90">
              We are experts in creating websites that resonate with and convert your ICP, build your brand, and scale on Webflow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/book-a-call"
                className="px-10 py-4 rounded-lg font-bold text-lg text-white shadow-lg hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 transform hover:-translate-y-1 border-2 border-transparent"
                style={{
                   background: '#1a1a1a',
                   borderImage: 'linear-gradient(to right, #3F7F99, #69D4FF) 1',
                   borderRadius: '0.5rem'
                }}
              >
                Book a Call →
              </Link>
              <Link
                href="/work"
                className="px-10 py-4 rounded-lg font-bold text-lg border border-white/30 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 transform hover:-translate-y-1"
                style={{ background: 'none', borderImage: 'none'}} /* Reverted style for See Work button */
              >
                See Work →
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos/Trust Bar Section */}
        <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="flex justify-center mb-8">
               <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold">5+ Years of Design Experience</span>
             </div>
            {/* Logos - Horizontal Auto-Scroll using react-fast-marquee */}
            <Marquee 
              gradient={false} 
              speed={40}
              direction="left"
              pauseOnHover={true}
              className="py-4"
            >
              <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none">
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo A</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo B</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo C</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo D</span></li>
                {/* Duplicate the logos to ensure seamless loop */}
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo A</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo B</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo C</span></li>
                <li><span className="text-gray-400 text-3xl font-bold flex-shrink-0 opacity-60">Logo D</span></li>
              </ul>
            </Marquee>
          </div>
        </section>

        {/* What we do Section */}
        <section className="py-20 bg-black text-white">
          {/* Reduced overall width with max-w-screen-lg */}
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="text-center mb-12">
              <span className="text-accent text-sm uppercase tracking-widest font-semibold">+ Agency Services</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                What we do
              </h2>
            </div>

            {/* Services Cards Grid */}
            {/* Refined grid for 2 wide cards on top, 3 narrower below on larger screens */}
            {/* Adjusted grid columns and spans for 2x3 layout on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Card 1: B2B Web Design (Wide on large screens) */}
              {/* Adjusted col-span for lg:grid-cols-6 */}
              {/* Adjusted padding to remove right and bottom padding */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl pt-6 pl-6 pr-0 pb-0 border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden">
                {/* Gradient Overlay Effect - Adjusted opacity */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Placeholder for small Icon - made it smaller, adjusted background and added subtle shadow */}
                  {/* Increased icon size */}
                  <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent text-xl shadow-inner shadow-accent/50"> {/* Example Icon Content */}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v-.228a4.5 4.5 0 014.477-4.477 2.25 2.25 0 011.942-.244l.994.244m1.958-.585a4.5 4.5 0 00-3.683-1.823A9.109 9.109 0 0012 15.75a9.058 9.058 0 00-1.89-.183m5.402 9.322m-3.672-1.569a4.5 4.5 0 013.325 3.325m-3.672-1.569C11.324 14.722 12 14.5 12 14.5s0 0 0 0l-3.325 3.325m1.958-.585a4.5 4.5 0 011.942.244l.994.244m0-6.516a4.5 4.5 0 00-3.683-1.823A9.109 9.109 0 0012 15.75a9.058 9.058 0 00-1.89-.183m5.402 9.322m-3.672-1.569a4.5 4.5 0 013.325 3.325m-3.672-1.569C11.324 14.722 12 14.5 12 14.5s0 0 0 0l-3.325 3.325M12 21l-3.325-3.325C8.676 14.722 12 14.5 12 14.5s0 0 0 0m-3.325 3.325a4.5 4.5 0 013.325-3.325M12 21l3.325-3.325C15.324 14.722 12 14.5 12 14.5s0 0 0 0m3.325-3.325a4.5 4.5 0 01-3.325 3.325" />
</svg>
</div>
                <h3 className="text-xl font-bold mb-2">B2B Web Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  On-brand web design that not only looks great but is optimized to engage and convert.
                </p>
                 {/* Placeholder for image/screenshots if needed - Added back top margin */}
                 <div className="w-full h-36 bg-gray-800 rounded-lg mt-3"></div>
                </div>
              </div>

              {/* Card 2: Webflow Development (Takes remaining space on large screens) */}
              {/* Added relative positioning and inner div for gradient effect */}
               {/* Adjusted gradient overlay opacity */}
               {/* Adjusted col-span for lg:grid-cols-6 */}
               {/* Adjusted padding to remove right and bottom padding */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl pt-6 pl-6 pr-0 pb-0 border border-white/[0.08] flex flex-col md:col-span-2 lg:col-span-3 overflow-hidden">
                {/* Gradient Overlay Effect - Adjusted opacity */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                   {/* Placeholder for small Icon - made it smaller, adjusted background and added subtle shadow */}
                   {/* Increased icon size */}
                   <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent text-xl shadow-inner shadow-accent/50"> {/* Example Icon Content */}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
</div>
                <h3 className="text-xl font-bold mb-2">Webflow Development</h3>
                <p className="text-gray-400 opacity-80 text-sm leading-relaxed flex-grow">
                  Scale faster with a performant and optimized Webflow website.
                </p>
                {/* Placeholder for image/screenshots if needed - Added back top margin */}
                <div className="w-full h-36 bg-gray-800 rounded-lg mt-3"></div>
                </div>
              </div>

              {/* Card 3: Ongoing Support */}
              {/* Added relative positioning and inner div for gradient effect */}
               {/* Adjusted gradient overlay opacity */}
               {/* Adjusted col-span for lg:grid-cols-6 */}
               {/* Adjusted padding to remove right and bottom padding */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl pt-6 pl-6 pr-0 pb-0 border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
                {/* Gradient Overlay Effect - Adjusted opacity */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                   {/* Placeholder for small Icon - made it smaller, adjusted background and added subtle shadow */}
                   {/* Increased icon size */}
                   <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent text-xl shadow-inner shadow-accent/50"> {/* Example Icon Content */}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.858-2.596L2 16.5m4.509-1.114a3 3 0 005.857 2.596L22 7.928m-7.5 10.364L17.25 21H6.75a9 9 0 01-3.515-6.862L3 12a9 9 0 0114.874-7.644m-3.737 2.198l-.735.368m-.354 1.095l-.368.735M12 10.5l-.368-.735m-.735-.368 1.095-.354m7.644 3.737l-.735-.368.368.735M12 10.5l1.095.354.368-.735m-3.322 1.958L12 13.5m0-3l-1.095.354-.368-.735m3.322-1.958L12 10.5m0 3l1.095-.354-.368-.735m-3.322 1.958L12 13.5" />
</svg>
</div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-400 opacity-80 text-sm leading-relaxed flex-grow">
                  A fast and reliable extension of your team.
                </p>
                {/* Placeholder for content - Added back top margin */}
                <div className="w-full h-36 bg-gray-800 rounded-lg mt-3"></div>
                </div>
              </div>

              {/* Card 4: Website Strategy */}
              {/* Added relative positioning and inner div for gradient effect */}
               {/* Adjusted gradient overlay opacity */}
               {/* Adjusted col-span for lg:grid-cols-6 */}
               {/* Adjusted padding to remove right and bottom padding */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl pt-6 pl-6 pr-0 pb-0 border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
                {/* Gradient Overlay Effect - Adjusted opacity */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                 {/* Placeholder for small Icon - made it smaller, adjusted background and added subtle shadow */}
                 {/* Increased icon size */}
                 <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent text-xl shadow-inner shadow-accent/50"> {/* Example Icon Content */}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6a.75.75 0 00-.75-.75H5.625a.75.75 0 00-.75.75v11.25c0 .414.336.75.75.75h9.75a.75.75 0 00.75-.75v-4.5m-13.5-9L12 3m-7.5 3L7.5 3m7.5 3L12 3m0 18.75v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3.375m-18 0h16.5a.75.75 0 00.75-.75V5.625a.75.75 0 00-.75-.75H3.375a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75z" />
</svg>
</div>
                <h3 className="text-xl font-bold mb-2">Website Strategy</h3>
                <p className="text-gray-400 opacity-80 text-sm leading-relaxed flex-grow">
                  Expert strategy to get the most out of your website.
                </p>
                {/* Placeholder for content like conversion rate chart - Added back top margin */}
                <div className="w-full h-36 bg-gray-800 rounded-lg mt-3"></div>
                </div>
              </div>

              {/* Card 5: Website Migration */}
              {/* Added relative positioning and inner div for gradient effect */}
               {/* Adjusted gradient overlay opacity */}
               {/* Adjusted col-span for lg:grid-cols-6 */}
               {/* Adjusted padding to remove right and bottom padding */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl pt-6 pl-6 pr-0 pb-0 border border-white/[0.08] flex flex-col lg:col-span-2 overflow-hidden">
                {/* Gradient Overlay Effect - Adjusted opacity */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                 {/* Placeholder for small Icon - made it smaller, adjusted background and added subtle shadow */}
                 {/* Increased icon size */}
                 <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent text-xl shadow-inner shadow-accent/50"> {/* Example Icon Content */}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>
</div>
                <h3 className="text-xl font-bold mb-2">Website Migration</h3>
                <p className="text-gray-400 opacity-80 text-sm leading-relaxed flex-grow">
                  Seamlessly migrate to the best website platform, Webflow.
                </p>
                 {/* Placeholder for migration icons like C, W, box, Webflow - Added back top margin */}
                 <div className="w-full h-36 bg-gray-800 rounded-lg mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials and Stats Section - Grid Layout */}
        <section className="py-12 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="text-center mb-12">
              <span className="text-accent text-sm uppercase tracking-widest font-semibold">+ Client Success</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                We get nothing but love from our partners. And for a reason.
              </h2>
            </div>
          </div>

          {/* Testimonials and Stats - Grid Layout */}
          {/* Implemented grid for two rows with consistent card sizes */}
          {/* Limited overall width and centered the grid, ensured subtle rounded corners on cards */}
          <div className="px-4 max-w-screen-lg mx-auto">
            {/* Using a standard 3-column grid on large screens for uniform card widths */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1: Stat - 20% */}
              {/* Removed specific col-span for uniform size */}
              <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-accent">20%</h3>
                  <p className="text-gray-400 text-sm mt-2">organic traffic increase</p>
                </div>
              </div>

              {/* Card 2: Testimonial - Mengütian Üniver */}
              {/* Removed specific col-span for uniform size */}
              <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                 <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {/* Placeholder for Profile Icon */}
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <span className="font-semibold text-sm">Mengütian Üniver</span>
                  </div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    What I found best was the willingness of all Flow Ninja's employees to go the extra mile.
                  </p>
                </div>
              </div>

               {/* Card 3: Stat - 8h */}
               {/* Removed specific col-span for uniform size */}
              <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-accent">8h</h3>
                  <p className="text-gray-400 text-sm mt-2">well deserved sleep</p>
                </div>
              </div>

              {/* Card 4: Testimonial - Andela Rasovic */}
               <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                 <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {/* Placeholder for Profile Icon */}
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <span className="font-semibold text-sm">Andela Rasovic</span>
                  </div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    The quality was never compromised within the tight time frame. Very flexible to our last-minute changes and very friendly in the communication.
                  </p>
                </div>
              </div>

              {/* Card 5: Stat - 10x */}
              {/* Removed specific col-span for uniform size */}
              <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-accent">10x</h3>
                  <p className="text-gray-400 text-sm mt-2">faster website changes</p>
                </div>
              </div>

               {/* Card 6: Testimonial - Robert McCauley */}
               {/* Removed specific col-span for uniform size */}
               <div className="relative h-56 bg-white/[0.02] backdrop-blur-md px-6 pt-6 pb-4 border border-white/[0.08] flex flex-col justify-between overflow-hidden rounded-md">
                 {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(105, 212, 255, 0.05), rgba(63, 127, 153, 0.05))', mask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)', WebkitMask: 'radial-gradient(circle at top left, transparent 0%, transparent 15%, #fff 50%)' }}></div>
                 <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {/* Placeholder for Profile Icon */}
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <span className="font-semibold text-sm">Robert McCauley</span>
                  </div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    Thanks to their expertise and guidance, we're able to create and modify pages quickly, test new features, and improve our content.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight text-center">Our works</h2>

            {/* Filter Bar Placeholder - Removed */}

            {/* Work Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Work Example Card 1 */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
                {/* Image Placeholder - Wrapped in padded div */}
                <div className="p-4">
                   <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
                </div>
                
                <div className="p-6 pt-0 flex flex-col flex-grow">
                  {/* Latest Tag */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded uppercase" style={{ color: '#69D4FF' }}>• LATEST SAAS</span>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mt-1">Send a survey over text.</h3>
                  {/* Description */}
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">Marketing site sprint with micro animations</p>

                   {/* Link with Arrow Icon */}
                   <Link
                     href="#"
                     className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
                   >
                     {/* Diagonal Arrow Icon */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                     </svg>
                   </Link>
                </div>
              </div>

              {/* Work Example Card 2 */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
                {/* Image Placeholder - Wrapped in padded div */}
                <div className="p-4">
                   <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
                </div>
                <div className="p-6 pt-0 flex flex-col flex-grow">
                  {/* Latest Tag */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded uppercase" style={{ color: '#69D4FF' }}>• LATEST AI SaaS</span>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mt-1">Distribution to Other Platforms</h3>
                  {/* Description */}
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">Marketing site with scroll trigger animation</p>

                   {/* Link with Arrow Icon */}
                   <Link
                     href="#"
                     className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
                   >
                     {/* Diagonal Arrow Icon */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                     </svg>
                   </Link>
                </div>
              </div>

              {/* Work Example Card 3 */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
                {/* Image Placeholder - Wrapped in padded div */}
                <div className="p-4">
                   <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
                </div>
                <div className="p-6 pt-0 flex flex-col flex-grow">
                  {/* Latest Tag */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded uppercase" style={{ color: '#69D4FF' }}>• LATEST SAAS AI</span>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mt-1">Instant returns on your key metrics.</h3>
                  {/* Description */}
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">Marketing one-pager with custom built-in interactive demo</p>

                   {/* Link with Arrow Icon */}
                   <Link
                     href="#"
                     className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
                   >
                     {/* Diagonal Arrow Icon */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                     </svg>
                   </Link>
                </div>
              </div>

              {/* Work Example Card 4 */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.08] overflow-hidden flex flex-col">
                {/* Image Placeholder - Wrapped in padded div */}
                <div className="p-4">
                   <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
                </div>
                <div className="p-6 pt-0 flex flex-col flex-grow">
                  {/* Latest Tag */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded uppercase" style={{ color: '#69D4FF' }}>• LATEST WEB 3</span>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mt-1">Empowering Liquid Crypto Markets.</h3>
                  {/* Description */}
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-grow">Scroll trigger animation + custom Blender animations</p>

                   {/* Link with Arrow Icon */}
                   <Link
                     href="#"
                     className="md:absolute md:bottom-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors group transform transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 mt-4 md:mt-0 self-end"
                   >
                     {/* Diagonal Arrow Icon */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-accent transition-colors">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                     </svg>
                   </Link>
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

        {/* Integrations Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Top Section: Heading and Tabs */}
            <div className="text-center mb-12">
              <span className="text-accent text-sm uppercase tracking-widest font-semibold mb-4 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
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
              {[ 'Hubspot', 'Salesforce', 'Zapier', 'Google Analytics', 'Mixpanel', 'Segment', 'Mailchimp', 'Pardot', 'ActiveCampaign', 'Shopify', 'Greenhouse', 'Marketo' ].map((name, index) => {
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
                              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 12.8954 12 11.7908 12H10V14H11.7908C14.5523 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="currentColor"/>
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

        {/* Why Amply Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Heading and Description */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                {/* Tag */}
                <span className="text-accent text-sm uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  Why Amply for Webflow
                </span>
                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Accelerating <br className="hidden md:block"/> B2B growth
                </h2>
                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-md">
                  Amply is a certified Webflow agency with over 100 successful projects, helping B2B brands accelerate growth through high-performance, scalable Webflow websites.
                </p>
              </div>

              {/* Right Column: Points List */}
              <div className="flex flex-col space-y-8">
                {/* Point 1: Webflow Experts for B2B */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15.96 11.153l-3.484 3.484a3 3 0 11-4.243-4.243l3.484-3.484M16.5 10.5l-3 3m3-3l3 3"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">Webflow Experts for B2B</div>
                    <div className="text-sm text-gray-300">We combine technical Webflow expertise with industry knowledge to drive growth for B2B.</div>
                  </div>
                </div>
                {/* Point 2: Marketing Integrations */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">Marketing Integrations</div>
                    <div className="text-sm text-gray-300">Connect your marketing tools with Webflow to optimize performance and streamline workflows.</div>
                  </div>
                </div>
                {/* Point 3: SEO Optimized */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 18V6m0 0l-3 3m3-3l3 3"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">SEO Optimized</div>
                    <div className="text-sm text-gray-300">Ensure your website is SEO-optimized with Webflow for better performance and visibility.</div>
                  </div>
                </div>
                {/* Point 4: Easy to scale */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l5 5 5-5M12 7v10"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">Easy to scale</div>
                    <div className="text-sm text-gray-300">Empower your marketing team with a website that is easy to scale, adapting as your business grows.</div>
                  </div>
                </div>
                {/* Point 5: Website Migration */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                     <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-3m0 0V8m0 5l4 4m-4-4l-4 4m8-12v3m0 0v5m0-5l4-4m-4 4l-4-4m8 8v3m0 0v5m0-5l4 4m-4-4l-4 4M12 12v9m0-9l3-3m-3 3l-3-3"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">Website Migration</div>
                    <div className="text-sm text-gray-300">Transition to Webflow with our industry-leading migration process to ensure a smooth migration.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-screen-lg">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-12">Membership</h2>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-white/[0.05] rounded-full p-1 border border-white/10">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-semibold ${membershipTab === 'Standard' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/[0.05]'} transition-colors`}
                  onClick={() => setMembershipTab('Standard')}
                >
                  <span className="inline-block mr-2">⚡</span> Standard
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-semibold ${membershipTab === 'Pro' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/[0.05]'} transition-colors`}
                  onClick={() => setMembershipTab('Pro')}
                >
                   ⚡ Pro
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {membershipTab === 'Standard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Card: Join Designjoy */}
                <div className="relative rounded-xl p-8 flex flex-col justify-between overflow-hidden"
                   style={{ background: 'linear-gradient(to bottom right, #ff007f, #ff8a00, #e21a4b, #00b0ff, #ffc107)' }} /* Placeholder gradient */
                >
                   {/* Abstract shapes placeholder - Simplified representation */}
                  <div className="absolute inset-0 opacity-30">
                     {/* Basic circles as placeholders */}
                     <div className="absolute w-24 h-24 bg-pink-600 rounded-full" style={{ top: '10%', left: '5%' }}></div>
                     <div className="absolute w-20 h-20 bg-teal-400 rounded-full" style={{ top: '20%', right: '10%' }}></div>
                     <div className="absolute w-28 h-28 bg-purple-600 rounded-full" style={{ bottom: '15%', left: '20%' }}></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Slots available Tag */}
                    <span className="inline-block bg-pink-500 text-black text-sm font-semibold px-4 py-1 rounded-full mb-6 w-max">Slots available</span>
                    {/* Main Heading */}
                    <h3 className="text-white text-5xl md:text-6xl font-bold leading-tight mt-auto">Join <br/> Designjoy</h3>

                    {/* Booking Link */}
                    <div className="mt-12">
                       <div className="text-white text-xl font-semibold">Book a 15-min intro call</div>
                       <div className="text-gray-300 text-sm mt-1">Learn more about how DesignJoy works and how it can help you.</div>
                       <Link href="/book-a-call" className="inline-flex items-center text-accent font-semibold mt-2">
                          Learn More <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </Link>
                    </div>

                    {/* Refer & Earn Link */}
                     <div className="mt-6">
                       <div className="text-white text-xl font-semibold">Refer a friend & earn</div>
                       <div className="text-gray-300 text-sm mt-1">Earn 5% monthly recurring commissions for each referral.</div>
                       <Link href="/refer" className="inline-flex items-center text-accent font-semibold mt-2">
                          Learn More <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </Link>
                    </div>

                  </div>
                </div>

                {/* Right Card: Monthly Club */}
                <div className="bg-black rounded-xl p-8 border border-white/10 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Monthly Club</h3>
                    <button className="text-gray-400 text-sm border border-gray-700 rounded-full px-4 py-1 hover:text-white transition-colors">Pause or cancel anytime</button>
                  </div>
                  <div className="border-t border-white/10 mb-6"></div>

                  {/* Price */}
                  <div className="text-white mb-6">
                    <span className="text-5xl font-bold">$4,995</span><span className="text-xl text-gray-400">/month</span>
                    <p className="text-gray-300 text-sm mt-1">One request at a time. Pause or cancel anytime.</p>
                  </div>

                  {/* Included Features */}
                  <div className="mb-8">
                    <div className="text-white text-sm font-semibold mb-3">WHAT'S INCLUDED</div>
                    <div className="grid grid-cols-2 gap-y-3 text-gray-300 text-sm">
                      <div>• One request at a time</div>
                      <div>• Unlimited stock photos</div>
                      <div>• Average 48 hour delivery</div>
                      <div>• Unlimited users</div>
                      <div>• Unlimited brands</div>
                      <div>• Pause or cancel anytime</div>
                      <div>• Webflow development</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                    <button className="flex-grow flex items-center justify-center gap-2 bg-orange-500 text-black font-bold text-lg py-3 rounded-lg hover:opacity-90 transition-opacity w-full">
                       Get started
                    </button>
                    <Link href="/book-a-call" className="text-white/70 text-sm font-semibold hover:text-white transition-colors flex-shrink-0">or book a call</Link>
                  </div>
                </div>
              </div>
            )}

            {membershipTab === 'Pro' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* Left Card: Join Designjoy Pro */}
                <div className="relative rounded-xl p-8 flex flex-col justify-between overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #4a00e0, #8e2de2)' }}> {/* Placeholder gradient for Pro */}
                   {/* Abstract shapes placeholder - Simplified representation */}
                  <div className="absolute inset-0 opacity-30">
                     {/* Basic circles as placeholders */}
                     <div className="absolute w-24 h-24 bg-indigo-600 rounded-full" style={{ top: '15%', left: '10%' }}></div>
                     <div className="absolute w-20 h-20 bg-purple-400 rounded-full" style={{ top: '25%', right: '15%' }}></div>
                     <div className="absolute w-28 h-28 bg-violet-600 rounded-full" style={{ bottom: '20%', left: '5%' }}></div>
                  </div>
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                     {/* Slots available Tag */}
                    <span className="inline-block bg-purple-500 text-black text-sm font-semibold px-4 py-1 rounded-full mb-6 w-max">Slots available</span>
                    {/* Main Heading */}
                    <h3 className="text-white text-5xl md:text-6xl font-bold leading-tight mt-auto">Join <br/> Designjoy Pro</h3>
                     {/* Booking Link */}
                    <div className="mt-12">
                       <div className="text-white text-xl font-semibold">Book a 15-min intro call</div>
                       <div className="text-gray-300 text-sm mt-1">Learn more about how DesignJoy works and how it can help you.</div>
                       <Link href="/book-a-call" className="inline-flex items-center text-accent font-semibold mt-2">
                          Learn More <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </Link>
                    </div>

                    {/* Refer & Earn Link */}
                     <div className="mt-6">
                       <div className="text-white text-xl font-semibold">Refer a friend & earn</div>
                       <div className="text-gray-300 text-sm mt-1">Earn 5% monthly recurring commissions for each referral.</div>
                       <Link href="/refer" className="inline-flex items-center text-accent font-semibold mt-2">
                          Learn More <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </Link>
                    </div>
                  </div>
                </div>

                 {/* Right Card: Pro Club */}
                <div className="bg-black rounded-xl p-8 border border-white/10 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Pro Club</h3>
                    <button className="text-gray-400 text-sm border border-gray-700 rounded-full px-4 py-1 hover:text-white transition-colors">Pause or cancel anytime</button>
                  </div>
                  <div className="border-t border-white/10 mb-6"></div>

                  {/* Price */}
                  <div className="text-white mb-6">
                    <span className="text-5xl font-bold">$9,995</span><span className="text-xl text-gray-400">/month</span>
                     <p className="text-gray-300 text-sm mt-1">Unlimited requests. Pause or cancel anytime.</p>
                  </div>

                  {/* Included Features */}
                  <div className="mb-8">
                    <div className="text-white text-sm font-semibold mb-3">WHAT'S INCLUDED</div>
                    <div className="grid grid-cols-2 gap-y-3 text-gray-300 text-sm">
                      <div>• Unlimited requests</div>
                      <div>• Unlimited stock photos</div>
                      <div>• Average 24 hour delivery</div>
                      <div>• Up to 5 users</div>
                      <div>• Unlimited brands</div>
                      <div>• Pause or cancel anytime</div>
                      <div>• Webflow development</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                    <button className="flex-grow flex items-center justify-center gap-2 bg-purple-500 text-black font-bold text-lg py-3 rounded-lg hover:opacity-90 transition-opacity w-full">
                       Get started
                    </button>
                    <Link href="/book-a-call" className="text-white/70 text-sm font-semibold hover:text-white transition-colors flex-shrink-0">or book a call</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Info Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Info Card 1: Pause Anytime */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl p-6 border border-white/10 flex items-start gap-4">
                 <div className="flex-shrink-0 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6.003 6.003zm-7.5-6l.008-.008v.008zm0 0h.008v-.008zm0 0l-.008.008zm0 0l-.008-.008v.008zm7.5 6h-.008v.008zm0 0h.008v-.008zm0 0l-.008.008zm0 0l-.008-.008v.008zm-3.75-3.75l.008-.008v.008zm0 0h.008v-.008zm0 0l-.008.008zm0 0l-.008-.008v.008zm3.75 0l.008-.008v.008zm0 0h.008v-.008zm0 0l-.008.008zm0 0l-.008-.008v.008z"/></svg>
                 </div>
                 <div>
                    <div className="font-bold text-lg text-white mb-1">Pause anytime</div>
                    <div className="text-sm text-gray-300">Temporarily pause your subscription anytime, no sweat.</div>
                 </div>
              </div>

              {/* Info Card 2: Try it for a week */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-xl p-6 border border-white/10 flex items-start gap-4">
                 <div className="flex-shrink-0 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                 </div>
                 <div>
                    <div className="font-bold text-lg text-white mb-1">Try it for a week</div>
                    <div className="text-sm text-gray-300">Not loving it after a week? Get 75% back, no questions asked.</div>
                 </div>
              </div>
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
