"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const hireSteps = [
  { step: 1, title: "Search or browse", description: "Find what you need from thousands of skilled professionals.", icon: "🔍" },
  { step: 2, title: "Review & choose", description: "Check portfolios, read reviews, and pick the right fit.", icon: "📋" },
  { step: 3, title: "Pay securely", description: "Your payment is held in escrow until the work is done.", icon: "🔒" },
  { step: 4, title: "Get it done", description: "Approve the work and release payment. Leave a review.", icon: "✅" },
];

const sellSteps = [
  { step: 1, title: "Create your profile", description: "Sign up free and set up your gig in minutes.", icon: "👤" },
  { step: 2, title: "Get discovered", description: "Your gig appears in search and category listings.", icon: "🚀" },
  { step: 3, title: "Deliver & earn", description: "Complete the work and receive 88% of every sale.", icon: "💰" },
  { step: 4, title: "Grow your reputation", description: "Great reviews bring more clients and higher earnings.", icon: "📈" },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"hire" | "sell">("hire");
  const steps = activeTab === "hire" ? hireSteps : sellSteps;

  return (
    <section id="how-it-works" className="py-28 bg-surface-dark/30">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How It <span className="text-electric-violet">Works</span>
            </h2>
            <p className="mt-3 text-muted-gray">
              Simple for everyone.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-xl border border-border-subtle bg-void-black p-1">
                <button
                  onClick={() => setActiveTab("hire")}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "hire"
                      ? "bg-electric-violet text-pure-white"
                      : "text-muted-gray hover:text-pure-white"
                  }`}
                >
                  I want to hire
                </button>
                <button
                  onClick={() => setActiveTab("sell")}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "sell"
                      ? "bg-electric-violet text-pure-white"
                      : "text-muted-gray hover:text-pure-white"
                  }`}
                >
                  I want to sell
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <AnimateOnScroll key={`${activeTab}-${s.step}`} delay={s.step * 80}>
              <div className="flex gap-4 rounded-xl border border-border-subtle bg-surface-dark p-5 transition-all hover:border-electric-violet/30">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <span className="font-accent text-[10px] text-electric-violet">
                    STEP {s.step}
                  </span>
                  <h3 className="text-sm font-semibold text-pure-white">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-gray">{s.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
