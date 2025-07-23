"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 border-b border-[#18181b] transition-all duration-300 ${scrolled ? 'bg-[#020103]/80 backdrop-blur-xl' : 'bg-[#020103]/30 backdrop-blur-sm'}`} style={{ WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(4px)', backdropFilter: scrolled ? 'blur(24px)' : 'blur(4px)' }}>
      <div className="mx-auto px-4 sm:px-2 flex items-center gap-2 justify-between max-w-[700px]">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-2 flex-shrink-0">
          <Image src="/Ayesha's Project Frame 6.svg" alt="WX Logo" width={48} height={20} className="w-10 h-auto sm:w-[60px]" />
        </Link>
        {/* Nav - pill shaped */}
        <nav className="hidden lg:flex flex-1 justify-center mx-1">
          <ul className="flex space-x-6 sm:space-x-8 text-gray-300 text-xs sm:text-sm font-normal px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#232326] bg-transparent">
            <li><Link href="#what-we-do" className="hover:text-white">What we do</Link></li>
            <li><Link href="#why-us" className="hover:text-white">Why us</Link></li>
            <li><Link href="#our-works" className="hover:text-white">Our Works</Link></li>
            <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </nav>
        {/* Book a Call Button - glassy effect */}
        <div className="hidden lg:block">
          <Link
            href="/book-a-call"
            className="ml-2 px-4 sm:px-5 py-1.5 rounded-lg text-xs sm:text-base text-white border bg-[rgba(0,182,255,0.16)]"
            style={{
              borderColor: 'rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 0 6px 3px rgba(255,255,255,0.25), 0 0 0 2px #18181b, 0 2px 8px 0 rgba(0,0,0,0.25)'
            }}
          >
            Book a Call
          </Link>
        </div>
        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#020103] border-b border-[#18181b] backdrop-blur-md bg-opacity-90 pt-3 pb-6 flex flex-col" style={{ minHeight: '100dvh' }}>
          <div className="flex items-center justify-end px-4 mb-6">
            <button
              className="text-white text-2xl p-2 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-gray-300 text-lg font-normal mb-4 px-6 text-left">
            <li><Link href="#what-we-do" className="hover:text-white block w-full" onClick={() => setMenuOpen(false)}>What we do</Link></li>
            <li><Link href="#why-us" className="hover:text-white block w-full" onClick={() => setMenuOpen(false)}>Why us</Link></li>
            <li><Link href="#our-works" className="hover:text-white block w-full" onClick={() => setMenuOpen(false)}>Our Works</Link></li>
            <li><Link href="#pricing" className="hover:text-white block w-full" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          </ul>
          <div className="px-6 w-full">
          <Link
            href="/book-a-call"
              className="w-full block px-6 py-3 rounded-xl text-base text-white border bg-[rgba(0,182,255,0.16)] text-center"
            style={{
                borderColor: 'rgba(255,255,255,0.15)',
                boxShadow: 'inset 0 0 6px 3px rgba(255,255,255,0.25), 0 0 0 2px #18181b, 0 2px 8px 0 rgba(0,0,0,0.25)'
            }}
            onClick={() => setMenuOpen(false)}
          >
              Book a Call
          </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 