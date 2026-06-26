"use client";

import { useState } from "react";

export default function Navbar({ onSignUp }: { onSignUp: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Gig<span className="text-violet">ForYou</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#categories" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Browse</a>
          <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">How It Works</a>
          <button onClick={onSignUp} className="rounded-lg bg-violet px-5 py-2 text-sm font-medium text-white hover:bg-violet-light transition-colors">
            Sign Up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a href="#categories" className="text-sm text-gray-500" onClick={() => setMobileOpen(false)}>Browse</a>
            <a href="#how-it-works" className="text-sm text-gray-500" onClick={() => setMobileOpen(false)}>How It Works</a>
            <button onClick={() => { setMobileOpen(false); onSignUp(); }} className="rounded-lg bg-violet py-2 text-sm font-medium text-white">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
