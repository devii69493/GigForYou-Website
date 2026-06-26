export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="aurora-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void-black" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
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
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#categories"
            className="rounded-xl bg-electric-violet px-8 py-3.5 text-base font-semibold text-pure-white transition-all hover:bg-violet-glow hover:shadow-lg hover:shadow-electric-violet/25"
          >
            Browse Gigs
          </a>
          <a
            href="#cta"
            className="group flex items-center gap-2 rounded-xl border border-border-subtle px-8 py-3.5 text-base font-semibold text-pure-white transition-all hover:border-electric-violet"
          >
            Start Selling
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-gray">
          <span className="font-accent">2,400+ services listed</span>
          <span className="h-1 w-1 rounded-full bg-muted-gray" />
          <span className="flex items-center gap-1">
            Rated{" "}
            <span className="text-warning-amber">&#9733;</span>{" "}
            <span className="font-accent text-pure-white">4.9</span>
          </span>
        </div>
      </div>
    </section>
  );
}
