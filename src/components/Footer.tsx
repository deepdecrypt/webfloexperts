"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black text-white overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(120% 100% at 50% -10%, rgba(105,212,255,0.25) 0%, rgba(105,212,255,0.08) 35%, rgba(0,0,0,0) 60%)',
      }} />

      <div className="relative z-10 px-4 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side: Agency Info */}
            <div className="flex flex-col max-w-lg">
              <h3 className="text-xl md:text-2xl font-medium mb-6 leading-relaxed text-white/90">
                Webfloexperts is a go-to-market–focused agency
                helping modern brands get their first sale.
              </h3>
              {/* Enterprise Partner Badge Placeholder */}
              <div>
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wide rounded bg-blue-600/90 text-white border border-blue-500/50">
                  Webflow Development Agency
                </span>
              </div>
            </div>

            {/* Right Side: Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {/* Services Column */}
              <div className="sm:col-span-1">
                <h4 className="font-semibold text-xs text-white/40 uppercase tracking-[0.2em] mb-6">Services</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">Custom Websites</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">Landing Pages</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">MVP Development</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">SEO & CRO</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">Webflow & Shopify Migrations</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">Marketing Automations</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">AI Automations</Link></li>
                  <li><Link href="http://webfloexperts.com/" className="text-white/60 hover:text-white transition-colors duration-200">Outbound Strategy</Link></li>
                </ul>
              </div>

              {/* Our Clients Column (Spans 2 columns) */}
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-xs text-white/40 uppercase tracking-[0.2em] mb-6">Our Clients</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <Link href="https://mentormatch.com" className="text-white/60 hover:text-white transition-colors duration-200">Mentor Match</Link>
                  <Link href="https://chawellness.in" className="text-white/60 hover:text-white transition-colors duration-200">CHA Wellness</Link>
                  <Link href="https://cloutgency.com" className="text-white/60 hover:text-white transition-colors duration-200">Cloutgency</Link>
                  <Link href="https://noorsaray.com" className="text-white/60 hover:text-white transition-colors duration-200">Noor Saray</Link>
                  <Link href="https://decorgeous.com" className="text-white/60 hover:text-white transition-colors duration-200">Decorgeous</Link>
                  <Link href="https://kresort.com" className="text-white/60 hover:text-white transition-colors duration-200">Kresort</Link>
                  <Link href="https://everealth.com" className="text-white/60 hover:text-white transition-colors duration-200">Everealth</Link>
                  <Link href="https://settlin.in" className="text-white/60 hover:text-white transition-colors duration-200">Settlin</Link>
                  <Link href="https://uxgear.in" className="text-white/60 hover:text-white transition-colors duration-200">UX Gear</Link>
                  <Link href="https://5pillarsrealty.com" className="text-white/60 hover:text-white transition-colors duration-200">5 Pillars Realty</Link>
                  <Link href="https://deepdecrypt.com" className="text-white/60 hover:text-white transition-colors duration-200">Deep Decrypt</Link>

                  <Link href="https://opmaint.com" className="text-white/60 hover:text-white transition-colors duration-200">Opmaint</Link>
                  <Link href="https://radical-rcm.com" className="text-white/60 hover:text-white transition-colors duration-200">Radical Health</Link>
                  <Link href="https://sahlak.com" className="text-white/60 hover:text-white transition-colors duration-200">Sahlak</Link>
                  <Link href="https://vsttractors.com" className="text-white/60 hover:text-white transition-colors duration-200">VST Tractors</Link>

                  {/* Newly added clients */}
                  <Link href="https://grads2pro.com" className="text-white/60 hover:text-white transition-colors duration-200">Grads2Pro</Link>
                  <Link href="https://humanwaretechnology.com" className="text-white/60 hover:text-white transition-colors duration-200">Humanware HRMS</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-sm text-white/40">
            <div className="text-center">© {new Date().getFullYear()} Webfloexperts. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer >
  );
} 