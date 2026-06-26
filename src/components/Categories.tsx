import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  { icon: "🎵", name: "Music & Audio", count: 312 },
  { icon: "🎨", name: "Design & Creative", count: 287 },
  { icon: "💻", name: "Tech & Dev", count: 245 },
  { icon: "✍️", name: "Writing & Content", count: 198 },
  { icon: "📸", name: "Photo & Video", count: 176 },
  { icon: "💪", name: "Health & Fitness", count: 143 },
  { icon: "🍳", name: "Food & Catering", count: 128 },
  { icon: "🔧", name: "Home & Trades", count: 167 },
];

export default function Categories() {
  return (
    <section id="categories" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Browse by <span className="text-electric-violet">Category</span>
            </h2>
            <p className="mt-3 text-muted-gray">
              Find exactly what you need.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.name} delay={i * 60}>
              <a
                href="#"
                className="group flex flex-col items-center rounded-xl border border-border-subtle bg-surface-dark p-6 text-center transition-all duration-300 hover:border-electric-violet/50"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-pure-white group-hover:text-electric-violet transition-colors">
                  {cat.name}
                </h3>
                <span className="mt-1 font-accent text-xs text-muted-gray">
                  {cat.count} gigs
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-semibold text-electric-violet hover:text-violet-glow transition-colors">
            View all 12 categories &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
