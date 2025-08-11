"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface CityClock {
  label: string;
  tz: string; // IANA timezone
  address: string;
}

const CITIES: CityClock[] = [
  { label: 'New York', tz: 'America/New_York', address: 'New York, NY 10003, USA' },
  { label: 'Toronto', tz: 'America/Toronto', address: 'Toronto, Ontario, Canada' },
  { label: 'Belgrade', tz: 'Europe/Belgrade', address: 'Belgrade, 11000, Serbia' },
  { label: 'Dubai', tz: 'Asia/Dubai', address: 'Dubai, 44599, Dubai' },
];

function formatTimeForZone(tz: string): string {
  const now = new Date();
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric', minute: '2-digit', hour12: true, timeZone: tz,
  }).format(now);
}

export default function Footer() {
  const [times, setTimes] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    CITIES.forEach((c) => { initial[c.tz] = formatTimeForZone(c.tz); });
    return initial;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTimes((prev) => {
        const next: Record<string, string> = {};
        CITIES.forEach((c) => { next[c.tz] = formatTimeForZone(c.tz); });
        return next;
      });
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const [email, setEmail] = useState('');
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real integration later
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black text-white overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(120% 100% at 50% -10%, rgba(105,212,255,0.25) 0%, rgba(105,212,255,0.08) 35%, rgba(0,0,0,0) 60%)',
      }} />

      <div className="relative z-10 px-4 py-16 lg:py-24"><div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Newsletter */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">Subscribe to<br />our Newsletter</h3>
            <form onSubmit={onSubmit} className="flex items-stretch max-w-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email address"
                className="flex-1 rounded-l-2xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-5 h-12 focus:outline-none focus:ring-2 focus:ring-[#69D4FF]/50"
              />
              <button
                type="submit"
                className="rounded-r-2xl h-12 px-5 bg-white/10 border border-white/10 border-l-0 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>

          {/* Nav links */}
          <nav className="grid grid-cols-2 gap-y-4 text-lg sm:gap-x-12">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="#pricing" className="hover:underline">Pricing</Link>
            <Link href="#our-works" className="hover:underline">Case Studies</Link>
            <Link href="/_blog" className="hover:underline">Blog</Link>
            <Link href="/book-call" className="hover:underline">Book a Call</Link>
            <Link href="/pricing" className="hover:underline">Plans</Link>
          </nav>

          {/* City times */}
          <div className="space-y-6">
            {CITIES.map((c) => (
              <div key={c.tz} className="flex flex-col">
                <div className="text-white font-semibold">
                  {c.label} - {times[c.tz] ?? formatTimeForZone(c.tz)}
                </div>
                <div className="text-white/60 text-sm">{c.address}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">X</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">YouTube</Link>
          </div>

          <div className="text-white/70">© {new Date().getFullYear()} WebfloExperts</div>
        </div>
        </div>
      </div>
    </footer>
  );
} 