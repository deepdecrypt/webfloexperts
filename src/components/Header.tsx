"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          <Image src="/Ayesha's Project Frame 6.svg" alt="Webflow Experts Logo" width={60} height={24} />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/work" className="text-gray-300 hover:text-white transition-colors">Work</Link></li>
            <li><Link href="/use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</Link></li>
            <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
          </ul>
        </nav>

        {/* Book a Call Button - Gradient border visible always */}
        <Link
          href="/book-a-call"
          className="px-6 py-2 rounded-lg font-bold text-white transition-colors hover:opacity-90 border-2 border-transparent ml-4 hidden md:inline-block"
          style={{
             background: '#1a1a1a',
             borderImage: 'linear-gradient(to right, #3F7F99, #69D4FF) 1',
          }}
        >
           Book a Call →
        </Link>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-4 pt-4 pb-6">
          <ul className="flex flex-col space-y-4 mb-4">
            <li><Link href="/services" className="text-gray-200 text-lg" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/pricing" className="text-gray-200 text-lg" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/work" className="text-gray-200 text-lg" onClick={() => setMenuOpen(false)}>Work</Link></li>
            <li><Link href="/use-cases" className="text-gray-200 text-lg" onClick={() => setMenuOpen(false)}>Use Cases</Link></li>
            <li><Link href="/resources" className="text-gray-200 text-lg" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          </ul>
          <Link
            href="/book-a-call"
            className="block w-full text-center px-6 py-3 rounded-lg font-bold text-white transition-colors hover:opacity-90 border-2 border-transparent"
            style={{
               background: '#1a1a1a',
               borderImage: 'linear-gradient(to right, #3F7F99, #69D4FF) 1',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Call →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header; 