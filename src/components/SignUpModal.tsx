"use client";

import { useState } from "react";

export default function SignUpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<"buyer" | "seller">("buyer");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold">Welcome to GigForYou!</h3>
            <p className="mt-2 text-sm text-gray-500">Your account has been created. We&apos;ll be in touch soon.</p>
            <button onClick={() => { onClose(); setSubmitted(false); setEmail(""); setName(""); }} className="mt-6 rounded-lg bg-violet px-6 py-2.5 text-sm font-medium text-white hover:bg-violet-light transition-colors">
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display text-xl font-bold">Join GigForYou</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6">Create your free account.</p>

            <form onSubmit={(e) => { e.preventDefault(); if (email && name) setSubmitted(true); }}>
              <div className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-violet transition-colors"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-violet transition-colors"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setType("buyer")}
                    className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-all ${type === "buyer" ? "border-violet bg-violet-bg text-violet" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                  >
                    I want to hire
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("seller")}
                    className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-all ${type === "seller" ? "border-violet bg-violet-bg text-violet" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                  >
                    I want to sell
                  </button>
                </div>
              </div>
              <button type="submit" className="mt-4 w-full rounded-lg bg-violet py-2.5 text-sm font-medium text-white hover:bg-violet-light transition-colors">
                Create Account
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-gray-400">Free forever. No credit card needed.</p>
          </>
        )}
      </div>
    </div>
  );
}
