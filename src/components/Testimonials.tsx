import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Found an incredible session bassist for our album in under an hour. Quality was unreal.",
    name: "Priya M.",
    role: "Music Producer",
    rating: 5,
  },
  {
    quote:
      "I've made over £3,000 in my first two months just teaching guitar online.",
    name: "Dan K.",
    role: "Guitar Tutor",
    rating: 5,
  },
  {
    quote:
      "Hired a personal chef for my dinner party — guests are still talking about it.",
    name: "Sofia R.",
    role: "Buyer",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What People Are{" "}
              <span className="text-electric-violet">Saying</span>
            </h2>
            <p className="mt-4 text-lg text-muted-gray">
              Real stories from real users.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="h-full rounded-xl border border-border-subtle bg-surface-dark p-8 transition-all hover:border-electric-violet/30">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-warning-amber text-sm">
                      &#9733;
                    </span>
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-pure-white">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-violet/20 text-sm font-semibold text-electric-violet">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pure-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-gray">{t.role}</p>
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
