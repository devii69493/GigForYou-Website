"use client";

export default function Hero({ onSignUp }: { onSignUp: () => void }) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Any skill.<br />
          <span className="text-violet">Any service.</span><br />
          One place.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-gray-500">
          Hire a session musician, a personal chef, a web designer — or offer your own skills to the world.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onSignUp} className="w-full rounded-xl bg-violet px-8 py-3.5 text-sm font-medium text-white hover:bg-violet-light transition-colors sm:w-auto">
            Get Started Free
          </button>
          <a href="#how-it-works" className="w-full rounded-xl border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-700 hover:border-violet hover:text-violet transition-colors sm:w-auto text-center">
            Learn More &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
