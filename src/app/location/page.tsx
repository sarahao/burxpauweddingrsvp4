'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            
            <h2 className="mb-4 font-['Helvetica'] font-thin text-[16px]">HOW TO GET THERE</h2>
            <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
            <div className="max-w-2xl w-full">
              <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[28px] text-center font-bold">
                Archie’s Events Place <br className="mb-[4px]" />         
              </p>

              <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[24px] text-center">
                Address: <br className="mb-[4px]" />
                Sapphire Street, <br className="mb-[4px]" />Crismor Subdivision<br className="mb-[4px]" />
                San Pedro City   <br className="mb-[4px]" /> 
                Laguna        
                <br className="mb-[4px]" />
                <br className="mb-[4px]" />

                4PM, Saturday <br className="mb-[4px]" /> March 8, 2025 <br className="mb-[4px]" />
                <br className="mb-[4px]" />

            </p>              
               <p className="mb-4 max-w-3xl font-['Orpheus_Pro'] text-[24px] text-center">
Directions:                <br className="mb-[4px]" />
               
</p>
              <a href="https://ul.waze.com/ul?place=ChIJr-tREA7XlzMRNhB9DETti7w&ll=14.35150710%2C121.03020050&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[18px]">
                Open in Waze
              </a>
              <br className="mb-[4px]" />

              <a href="https://maps.app.goo.gl/DABVQ2d9gaBfKU1s6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[18px]">
                Open in Google Maps
              </a>
              <br className="mb-[4px]" />

            </div>
                          <br className="mb-[4px]" />

            <div className="flex justify-center mb-4">
              <Image src="/map.JPG" alt="map" className="mb-4" width={500} height={500} />
            </div>
            <br className="mb-[4px]" />

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
          
      {showButton && (
        <div className="fixed bottom-4 right-4 z-[1000] md:bottom-8 md:right-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-gray-900 text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center text-base md:text-lg"
          >
            ↑
          </button>
        </div>
      )}
    </div>
  )
}


