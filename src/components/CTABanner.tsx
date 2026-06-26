export default function CTABanner() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-electric-violet/90 to-violet-glow/60 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 to-transparent" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-glow/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-electric-violet/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-pure-white sm:text-4xl md:text-5xl">
              Your next gig is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-pure-white/80">
              Join thousands of sellers earning on their own terms.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-pure-white px-8 py-4 text-base font-semibold text-electric-violet transition-all hover:bg-pure-white/90 hover:shadow-xl"
            >
              Create Your Free Account
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
