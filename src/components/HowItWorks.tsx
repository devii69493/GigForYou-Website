"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const hireSteps = [
  { step: 1, title: "Browse or search", description: "Find skilled professionals by category." },
  { step: 2, title: "Review & choose", description: "Check portfolios and reviews." },
  { step: 3, title: "Pay securely", description: "Payment held in escrow until work is done." },
  { step: 4, title: "Approve & review", description: "Release payment when you're happy." },
];

const sellSteps = [
  { step: 1, title: "Create your profile", description: "Sign up and list your service for free." },
  { step: 2, title: "Get discovered", description: "Buyers find you through search and categories." },
  { step: 3, title: "Deliver the work", description: "Complete the gig and get paid." },
  { step: 4, title: "Grow your reputation", description: "Earn reviews and attract more clients." },
];

export default function HowItWorks() {
  const [tab, setTab] = useState<"hire" | "sell">("hire");
  const steps = tab === "hire" ? hireSteps : sellSteps;

  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateOnScroll>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight">
            How it <span className="text-violet">works</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setTab("hire")}
                className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${tab === "hire" ? "bg-violet text-white" : "text-gray-500 hover:text-gray-900"}`}
              >
                I want to hire
              </button>
              <button
                onClick={() => setTab("sell")}
                className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${tab === "sell" ? "bg-violet text-white" : "text-gray-500 hover:text-gray-900"}`}
              >
                I want to sell
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div key={`${tab}-${s.step}`} className="rounded-xl border border-gray-200 bg-white p-5">
              <span className="font-accent text-xs font-medium text-violet">Step {s.step}</span>
              <h3 className="mt-1 text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
