"use client";

import { useState } from "react";

const hireSteps = [
  {
    step: 1,
    title: "Search or browse by category",
    description: "Find exactly what you need from thousands of skilled professionals.",
    icon: "🔍",
  },
  {
    step: 2,
    title: "View gig details, portfolio & reviews",
    description: "Check their work, read real reviews, and make an informed choice.",
    icon: "📋",
  },
  {
    step: 3,
    title: "Purchase securely — payment held in escrow",
    description: "Your money is safe. We hold it until the work is confirmed complete.",
    icon: "🔒",
  },
  {
    step: 4,
    title: "Work gets done — release payment on completion",
    description: "Once you're happy with the result, release payment to the seller.",
    icon: "✅",
  },
  {
    step: 5,
    title: "Leave a review",
    description: "Help the community by sharing your experience.",
    icon: "⭐",
  },
];

const sellSteps = [
  {
    step: 1,
    title: "Create a free account",
    description: "Sign up in seconds with email or social login. No fees to join.",
    icon: "👤",
  },
  {
    step: 2,
    title: "Build your gig",
    description: "Add your title, description, pricing, photos, and portfolio.",
    icon: "🛠️",
  },
  {
    step: 3,
    title: "Get discovered by buyers",
    description: "Your gig appears in search and category listings automatically.",
    icon: "🚀",
  },
  {
    step: 4,
    title: "Complete the work, get paid",
    description: "Deliver great work and receive 88% of every sale directly to your account.",
    icon: "💰",
  },
  {
    step: 5,
    title: "Build your reputation with reviews",
    description: "Great reviews lead to more clients and higher earnings.",
    icon: "📈",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"hire" | "sell">("hire");
  const steps = activeTab === "hire" ? hireSteps : sellSteps;

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It <span className="text-electric-violet">Works</span>
          </h2>
          <p className="mt-4 text-lg text-muted-gray">
            Simple for buyers. Simple for sellers.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl border border-border-subtle bg-surface-dark p-1">
            <button
              onClick={() => setActiveTab("hire")}
              className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === "hire"
                  ? "bg-electric-violet text-pure-white shadow-lg shadow-electric-violet/25"
                  : "text-muted-gray hover:text-pure-white"
              }`}
            >
              I want to hire
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === "sell"
                  ? "bg-electric-violet text-pure-white shadow-lg shadow-electric-violet/25"
                  : "text-muted-gray hover:text-pure-white"
              }`}
            >
              I want to sell
            </button>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {steps.map((s, i) => (
            <div
              key={`${activeTab}-${s.step}`}
              className="flex gap-6 rounded-xl border border-border-subtle bg-surface-dark p-6 transition-all hover:border-electric-violet/30"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-electric-violet/10 text-2xl">
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-accent text-xs text-electric-violet">
                    STEP {s.step}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-pure-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-muted-gray">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden items-center text-border-subtle sm:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
