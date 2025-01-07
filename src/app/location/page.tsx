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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

              <div className="flex justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7730.618477807098!2d121.0268740447302!3d14.351507119363447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d70e1051ebaf%3A0xbc8bed440c7d1036!2sArchie's%20Events%20Place!5e0!3m2!1sen!2sde!4v1734361615552!5m2!1sen!2sde" 
                  width="400" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <br className="mb-[4px]" />
              <br className="mb-[4px]" />
              <a href="https://ul.waze.com/ul?place=ChIJr-tREA7XlzMRNhB9DETti7w&ll=14.35150710%2C121.03020050&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Open in Waze
              </a>
              <br className="mb-[4px]" />

              <a href="https://maps.app.goo.gl/DABVQ2d9gaBfKU1s6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Open in Google Maps
              </a>
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
        <div className="fixed bottom-8 right-4 z-[1000]">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-gray-900 text-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-700 flex items-center justify-center text-lg transition-colors duration-200"
          >
            ↑
          </button>
        </div>
      )}
          
    </div>
  )
}


