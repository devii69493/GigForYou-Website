"use client";

import { useEffect, useState } from "react";

const activities = [
  { name: "Sarah", action: "hired a Logo Designer", location: "London", time: "2 min ago" },
  { name: "Arjun", action: "posted a Web Dev gig", location: "Manchester", time: "5 min ago" },
  { name: "Priya", action: "hired a Session Guitarist", location: "Birmingham", time: "8 min ago" },
  { name: "Dan", action: "earned £240 from Guitar Lessons", location: "Leeds", time: "12 min ago" },
  { name: "Sofia", action: "hired a Personal Chef", location: "Bristol", time: "15 min ago" },
  { name: "James", action: "completed a mixing gig", location: "Edinburgh", time: "18 min ago" },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [shownCount, setShownCount] = useState(0);

  useEffect(() => {
    if (shownCount >= 3) return;

    const initialDelay = setTimeout(() => {
      const idx = Math.floor(Math.random() * activities.length);
      setCurrent(idx);
      setVisible(true);
      setShownCount((c) => c + 1);

      const hideTimeout = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(hideTimeout);
    }, shownCount === 0 ? 8000 : 12000);

    return () => clearTimeout(initialDelay);
  }, [shownCount]);

  useEffect(() => {
    if (!visible && shownCount > 0 && shownCount < 3) {
      const nextTimeout = setTimeout(() => {
        const idx = Math.floor(Math.random() * activities.length);
        setCurrent(idx);
        setVisible(true);
        setShownCount((c) => c + 1);

        const hideTimeout = setTimeout(() => setVisible(false), 4000);
        return () => clearTimeout(hideTimeout);
      }, 10000);

      return () => clearTimeout(nextTimeout);
    }
  }, [visible, shownCount]);

  if (current < 0 || shownCount > 3) return null;

  const activity = activities[current];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 max-w-xs transition-all duration-500 hidden sm:block ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-dark/95 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-electric-violet/20 text-sm font-semibold text-electric-violet">
          {activity.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-pure-white truncate">
            <span className="font-semibold">{activity.name}</span>{" "}
            {activity.action}
          </p>
          <p className="text-xs text-muted-gray">
            {activity.location} &middot; {activity.time}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-muted-gray hover:text-pure-white flex-shrink-0"
          aria-label="Dismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
