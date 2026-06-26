"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    q: "Is my payment safe?",
    a: "Absolutely. All payments are processed through Stripe and held in escrow until you confirm the work is complete. Your money is never released to the seller until you're satisfied.",
  },
  {
    q: "What if the seller doesn't deliver?",
    a: "If a seller fails to deliver, you can open a dispute through our resolution centre. Our team will review the case and issue a full refund if the seller is at fault.",
  },
  {
    q: "What are the fees?",
    a: "Buying is completely free — you pay the listed price, nothing more. Sellers pay a 12% platform fee, which is automatically deducted from each sale. There are no hidden charges or subscription fees.",
  },
  {
    q: "How do refunds work?",
    a: "If you're not satisfied with the delivered work, you can request a revision or open a dispute within 14 days. If the dispute is resolved in your favour, you receive a full refund to your original payment method.",
  },
  {
    q: "Is it free to create a seller account?",
    a: "Yes, creating an account and listing your services is completely free. You only pay the 12% platform fee when you make a sale — no upfront costs.",
  },
  {
    q: "Are in-person services safe?",
    a: "We encourage all users to read seller reviews, communicate through our platform, and meet in a public place first for in-person services. Sellers can optionally verify their ID for added trust. See our full safety disclaimer for more details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked{" "}
              <span className="text-electric-violet">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-gray">
              Everything you need to know before getting started.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="rounded-xl border border-border-subtle bg-surface-dark overflow-hidden transition-all hover:border-electric-violet/20">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-pure-white pr-4">
                    {faq.q}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`h-5 w-5 flex-shrink-0 text-muted-gray transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-gray">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
