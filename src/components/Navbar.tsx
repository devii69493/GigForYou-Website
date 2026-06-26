"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-void-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-pure-white">
          Gig<span className="text-electric-violet">ForYou</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#categories"
            className="text-sm text-muted-gray transition-colors hover:text-pure-white"
          >
            Browse
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-gray transition-colors hover:text-pure-white"
          >
            How It Works
          </a>
          <a
            href="#featured"
            className="text-sm text-muted-gray transition-colors hover:text-pure-white"
          >
            Post a Gig
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-electric-violet px-5 py-2.5 text-sm font-semibold text-pure-white transition-all hover:bg-violet-glow hover:shadow-lg hover:shadow-electric-violet/25"
          >
            Sign Up
          </a>
        </div>

        <button
          className="md:hidden text-pure-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-void-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#categories"
              className="text-sm text-muted-gray transition-colors hover:text-pure-white"
              onClick={() => setMobileOpen(false)}
            >
              Browse
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-gray transition-colors hover:text-pure-white"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#featured"
              className="text-sm text-muted-gray transition-colors hover:text-pure-white"
              onClick={() => setMobileOpen(false)}
            >
              Post a Gig
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-electric-violet px-5 py-2.5 text-center text-sm font-semibold text-pure-white"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
