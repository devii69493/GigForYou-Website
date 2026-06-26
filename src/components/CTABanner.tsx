import AnimateOnScroll from "./AnimateOnScroll";

export default function CTABanner({ onSignUp }: { onSignUp: () => void }) {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <div className="rounded-2xl bg-violet px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 text-white/80">
              Join GigForYou today — it&apos;s completely free.
            </p>
            <button
              onClick={onSignUp}
              className="mt-8 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-violet hover:bg-gray-50 transition-colors"
            >
              Create Your Free Account &rarr;
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
