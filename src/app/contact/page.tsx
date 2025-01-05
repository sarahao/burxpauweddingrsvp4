'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 font-[Helvetica] font-thin text-[12px] text-gray-900">
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 space-y-4">
        <Link href="/" className="text-2xl font-[Orpheus_Pro] hover:underline">
          Bur & Pau
        </Link>
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
           
            <h2 className="mb-4 font-['Helvetica'] font-thin text-[16px]">CONTACT INFORMATION</h2>
            <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
            <div className="max-w-2xl w-full">
        
            <p className="mb-8 max-w-3xl font-[\\'Orpheus_Pro\\'] text-[28px] text-center">
           
Please feel free to contact us  <br className="mb-[4px]" />if you have any questions :)               <br className="mb-[4px]" />
              
            </p>
            <p className="mb-8 max-w-3xl font-[\\'Orpheus_Pro\\'] text-[24px] text-center">
           
            <span onClick={() => copyToClipboard('0915 107 5544')} className="cursor-pointer text-blue-500 hover:underline">
              Pau: 0915 107 5544
            </span>
            <br className="mb-[4px]" />
            <span onClick={() => copyToClipboard('0956 560 8792')} className="cursor-pointer text-blue-500 hover:underline">
              Bur: 0956 560 8792
            </span>



<br className="mb-[4px]" />
           
         </p>
            </div>
            <div className="w-full h-px bg-gray-900 mb-[60px]"></div>
            
            <div className="mb-8">
            <Link href="/rsvp" className="text-lg font-normal no-underline border border-gray-900 py-2 px-3 hover:bg-black hover:text-white active:bg-black active:text-white">
                RSVP
              </Link>            </div>
            <div className="flex mb-8">
              <span className="mr-1 text-[16px]">♡</span>
              <span className="text-[16px]">♡</span>
            </div>
            
          </div>
        </div>
      </main>

      <footer className="w-full text-center mb-4 mt-8">
        {/* Removed Instagram icon and PAUBUR2024 */}
      </footer>
      {showButton && (
        <a href="#" className="back-to-top">
          ↑
        </a>
      )}
    </div>
  )
}

