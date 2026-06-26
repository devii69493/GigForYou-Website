import AnimateOnScroll from "./AnimateOnScroll";

export default function CTABanner({ onSignUp }: { onSignUp: () => void }) {
  return (
    <section id="cta" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-electric-violet to-violet-glow/70 px-8 py-16 text-center sm:px-16">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-pure-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-electric-violet/30 blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-pure-white sm:text-4xl">
                Your next gig is waiting.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pure-white/80">
                Join thousands of sellers earning on their own terms.
              </p>
              <button
                onClick={onSignUp}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-pure-white px-8 py-4 text-base font-semibold text-electric-violet transition-all hover:bg-pure-white/90 hover:shadow-xl"
              >
                Create Your Free Account &rarr;
              </button>
              <p className="mt-3 text-xs text-pure-white/50">
                No credit card required
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
