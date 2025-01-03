'use client'

import React from 'react'
import { Instagram, Heart } from 'lucide-react'

export function WeddingInvitationComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 font-serif text-gray-900">
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 space-y-4">
        <h1 className="text-2xl">Pau & Bur</h1>
        <nav className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">LOCATION</a>
          <a href="#" className="hover:underline">THEME</a>
          <a href="#" className="hover:underline">REGISTRY</a>
          <a href="#" className="hover:underline">CONTACT</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
        <div className="bg-[#f9f9f9] p-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex mb-8">
              <Heart className="w-6 h-6 mr-1" strokeWidth={1} />
              <Heart className="w-6 h-6" strokeWidth={1} />
            </div>
            <h2 className="text-sm mb-4">CELEBRATE OUR WEDDING</h2>
            <div className="w-full h-px bg-gray-900 mb-8"></div>
            <div className="max-w-2xl w-full">
              <h3 className="text-5xl mb-4 font-normal">Pauline Hao</h3>
              <p className="text-xl mb-4">- and -</p>
              <h3 className="text-5xl mb-8 font-normal">Paul Viola</h3>
            </div>
            <div className="w-full h-px bg-gray-900 mb-8"></div>
            <p className="mb-8 max-w-md">
              We are delighted to invite you to join us as we exchange our vows and 
              enter into the bond of marriage in the presence of family and friends.
            </p>
            <div className="mb-8">
              <a href="#" className="text-lg font-normal no-underline border-b border-gray-900 pb-1">RSVP</a>
            </div>
            <div className="flex mb-8">
              <Heart className="w-6 h-6 mr-1" strokeWidth={1} />
              <Heart className="w-6 h-6" strokeWidth={1} />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center mb-4 mt-8">
        <a href="#" className="text-sm flex items-center justify-center">
          <Instagram size={20} className="mr-2" />
          PAUBUR2024
        </a>
      </footer>
    </div>
  )
}