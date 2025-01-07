'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThemePage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 font-['Helvetica'] font-thin text-[12px] text-gray-900">
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 space-y-4">
        <Link href="/" className="text-2xl font-['Orpheus_Pro'] hover:underline">Bur & Pau</Link>
        <nav className="flex space-x-4 text-[12px]">
          <Link href="/location" className="hover:underline">LOCATION</Link>
          <Link href="/theme" className="hover:underline">ATTIRE</Link>
          <Link href="/gift" className="hover:underline">GIFT</Link>
          <Link href="/contact" className="hover:underline">CONTACT</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">
        <div className="bg-[#f9f9f9] p-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex mb-8">
              <span className="mr-1 text-[16px]">♡</span>
              <span className="text-[16px]">♡</span>
            </div>
           
            <h2 className="mb-4 font-['Helvetica'] font-thin text-[16px]">ATTIRE INSPIRATION</h2>
            <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
            <div className="max-w-2xl w-full">
              <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[28px] text-center">
                Come dressed                
                in formal <br />
                <em>Modern Barong Tagalog</em>
                <br />
                and                 <br />
                <em>Filipiniana</em>
              </p>
              <h3 className="mb-4 font-['Orpheus_Pro'] text-[24px] text-center">Match the look with our color palette</h3>
              <div className="flex justify-center">
                <Image src="/wedding color palette.svg" alt="Wedding Color Palette" className="mb-8" width={500} height={500} />
              </div>
              <h3 className="mb-4 font-['Orpheus_Pro'] text-[24px] text-center">Outfit inspiration</h3>
              <div className="flex justify-center">
                <Image src="/outfitinspo.jpeg" alt="Outfit Inspiration" className="mb-8" width={500} height={500} />
              </div>
            </div>
            <div className="w-full h-px bg-gray-900 mb-[60px]"></div>
            
            <div className="mb-8">
              <Link href="/rsvp" className="text-lg font-normal no-underline border border-gray-900 py-2 px-3 hover:bg-black hover:text-white active:bg-black active:text-white">
                RSVP 
              </Link>
            </div>
            <div className="flex mb-8">
              <span className="mr-1 text-[16px]">♡</span>
              <span className="text-[16px]">♡</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center mb-4 mt-8">
        {/* Footer content */}
      </footer>
      {showButton && (
        <div className="fixed bottom-8 right-4 z-[1000] md:bottom-10 md:right-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white border border-gray-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white shadow-md transition-all duration-300 md:w-12 md:h-12"
          >
            ↑
          </button>
        </div>
      )}
    </div>
  );
}
