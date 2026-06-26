"use client";

import { useState } from "react";

export default function SignUpModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border-subtle bg-surface-dark p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-green/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7 text-success-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-pure-white">You&apos;re on the list!</h3>
            <p className="mt-2 text-sm text-muted-gray">We&apos;ll notify you when GigForYou launches.</p>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-electric-violet px-6 py-3 text-sm font-semibold text-pure-white hover:bg-violet-glow transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-pure-white">
                Join GigForYou
              </h3>
              <button onClick={onClose} className="text-muted-gray hover:text-pure-white" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-muted-gray mb-6">
              Sign up for early access. Free forever — no credit card needed.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-xl border border-border-subtle bg-void-black px-4 py-3 text-pure-white placeholder-muted-gray outline-none transition-colors focus:border-electric-violet"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-electric-violet py-3 text-sm font-semibold text-pure-white transition-colors hover:bg-violet-glow"
              >
                Get Early Access
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-muted-gray">
              Join 1,200+ people already on the waitlist.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
