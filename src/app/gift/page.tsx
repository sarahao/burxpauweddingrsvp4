'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  };

  return (
    <>
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
              
              <h2 className="mb-4 font-['Helvetica'] font-thin text-[16px]">GIFT INFORMATION</h2>
              <div className="w-full h-px bg-gray-900 mb-[48px]"></div>
              <div className="max-w-2xl w-full">
              <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[28px] text-center">
                We’re just happy  <br className="mb-[4px]" />to have you there!
        
              </p>
              <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[24px] text-center">
             
                But if you’re looking for something to give, we would be grateful <br className="mb-[4px]" /> for monetary gifts  <br className="mb-[4px]" />to help us begin our journey together. 
                <br className="mb-[4px]" />               <span className="mr-1 text-[16px]">♡</span>


              </p>
              <div className="flex flex-col items-center justify-center mb-8">
                <Image src="/gcash.png" alt="gcash qr code" className="mb-8" width={500} height={500} />
                <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[24px] text-center">
                  account name: Pauline Hao
                  <br className="mb-[4px]" />
                  account number: <span onClick={() => copyToClipboard('09151075544')} className="cursor-pointer text-blue-500 hover:underline">09151075544</span>
                </p>
                <Image src="/metrobank.png" alt="metrobank qr code" className="mb-8" width={500} height={500} />
                <p className="mb-8 max-w-3xl font-['Orpheus_Pro'] text-[24px] text-center">
                  account name: Pauline Hao
                  <br className="mb-[4px]" />
                  account number: <span onClick={() => copyToClipboard('5773577109371')} className="cursor-pointer text-blue-500 hover:underline">5773577109371</span>
                </p>
              </div>
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
        
      </div>
    </> 
  )
}



