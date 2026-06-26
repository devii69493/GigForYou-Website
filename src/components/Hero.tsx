"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const popularTags = [
  "Logo Design",
  "Guitar Lessons",
  "Personal Chef",
  "Web Developer",
  "Video Editing",
  "Personal Trainer",
  "Photography",
  "Copywriting",
];

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  startCounting,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  startCounting: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);

  return (
    <span className="font-accent text-pure-white">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { ref: statsRef, isInView: statsVisible } = useInView(0.5);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="aurora-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void-black" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-electric-violet/30 bg-electric-violet/10 px-4 py-1.5 text-sm text-violet-glow mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-violet opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-violet" />
          </span>
          Now live — join 1,200+ sellers already earning
        </div>

        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Any skill.
          <br />
          <span className="text-electric-violet">Any service.</span>
          <br />
          One place.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-gray sm:text-xl">
          Hire a session musician, a personal chef, a web designer — or offer
          your own skills to the world.
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center rounded-xl border border-border-subtle bg-surface-dark/80 px-4 py-3 backdrop-blur-sm transition-colors focus-within:border-electric-violet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mr-3 h-5 w-5 text-muted-gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="What do you need done?"
              className="flex-1 bg-transparent text-pure-white placeholder-muted-gray outline-none"
            />
            <button className="ml-3 rounded-lg bg-electric-violet px-4 py-2 text-sm font-semibold text-pure-white transition-colors hover:bg-violet-glow">
              Search
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-gray">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-border-subtle bg-surface-dark/50 px-3 py-1 text-xs text-muted-gray transition-all hover:border-electric-violet/50 hover:text-pure-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#categories"
            className="w-full rounded-xl bg-electric-violet px-8 py-3.5 text-base font-semibold text-pure-white transition-all hover:bg-violet-glow hover:shadow-lg hover:shadow-electric-violet/25 sm:w-auto"
          >
            Browse Gigs
          </a>
          <a
            href="#cta"
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-8 py-3.5 text-base font-semibold text-pure-white transition-all hover:border-electric-violet sm:w-auto"
          >
            Start Selling
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        <div
          ref={statsRef}
          className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-muted-gray sm:flex-row"
        >
          <div className="flex flex-col items-center">
            <AnimatedCounter
              target={2400}
              suffix="+"
              startCounting={statsVisible}
            />
            <span className="text-xs text-muted-gray mt-1">Services listed</span>
          </div>
          <span className="hidden h-8 w-px bg-border-subtle sm:block" />
          <div className="flex flex-col items-center">
            <AnimatedCounter
              target={1200}
              suffix="+"
              startCounting={statsVisible}
            />
            <span className="text-xs text-muted-gray mt-1">Active sellers</span>
          </div>
          <span className="hidden h-8 w-px bg-border-subtle sm:block" />
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1">
              <span className="text-warning-amber">&#9733;</span>
              <AnimatedCounter
                target={4.9}
                suffix=""
                startCounting={statsVisible}
                duration={1500}
              />
            </span>
            <span className="text-xs text-muted-gray mt-1">Average rating</span>
          </div>
          <span className="hidden h-8 w-px bg-border-subtle sm:block" />
          <div className="flex flex-col items-center">
            <AnimatedCounter
              target={12}
              suffix=""
              startCounting={statsVisible}
              duration={1000}
            />
            <span className="text-xs text-muted-gray mt-1">Categories</span>
          </div>
        </div>
      </div>
    </section>
  );
}
