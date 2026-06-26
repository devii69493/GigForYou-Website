"use client";

import { useEffect, useState } from "react";

export default function StickyFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEnd = window.innerHeight;
      const ctaBanner = document.getElementById("cta");
      const ctaTop = ctaBanner?.getBoundingClientRect().top ?? Infinity;
      setVisible(window.scrollY > heroEnd && ctaTop > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#cta"
        className="flex items-center gap-3 rounded-full bg-electric-violet px-6 py-3 text-sm font-semibold text-pure-white shadow-2xl shadow-electric-violet/30 backdrop-blur-xl transition-all hover:bg-violet-glow hover:shadow-electric-violet/50 hover:scale-105"
      >
        <span>Get Started Free</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
}
