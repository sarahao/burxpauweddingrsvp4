'use client'

import React, { useEffect, useState } from 'react'

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 font-['Helvetica'] font-thin text-[12px] text-gray-900">
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 space-y-4">
        <a href="/" className="text-2xl font-['Orpheus_Pro'] hover:underline">Bur & Pau</a>
        <nav className="flex space-x-4 text-[12px]">
          <a href="/location" className="hover:underline">LOCATION</a>
          <a href="/theme" className="hover:underline">THEME</a>
          <a href="/gift" className="hover:underline">GIFT</a>
          <a href="/contact" className="hover:underline">CONTACT</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">
        <div className="bg-[#f9f9f9] p-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex mb-8">
              <span className="mr-1 text-[16px]">♡</span>
              <span className="text-[16px]">♡</span>
            </div>
            
            <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
            <div className="max-w-2xl w-full">
              <h3 className="text-[70px] leading-[77px] font-[400] font-['Orpheus_Pro']">Bur</h3>
              <p className="text-[24px] mb-4 italic font-['Orpheus_Pro']">- and -</p>
              <h3 className="text-[70px] leading-[77px] font-[400] font-['Orpheus_Pro'] mb-[48px]">Pau</h3>
            </div>
            <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
            <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[28px] text-center">
              Invite you to join an <em>intimate</em>               <br className="mb-[4px]" />gathering to celebrate a <em>lot</em> of love.
              <br /> <br />
              We can’t wait to share               <br className="mb-[4px]" />our special day with you!
              <br />
              <br className="mb-[4px]" />
            </p>
            <p className="mb-[48px] font-['Helvetica'] font-thin text-[20px] text-center">
              4PM, SATURDAY  <br />MARCH 8, 2025
              <br />
              Archie’s Events Place
              <br />
              San Pedro Laguna
            </p> <br />
            <div className="mb-8">
              <a href="/rsvp" className="text-lg font-normal no-underline border border-gray-900 py-2 px-3 hover:bg-black hover:text-white active:bg-black active:text-white">
                RSVP
              </a>
            </div>
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
