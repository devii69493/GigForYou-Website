import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  { icon: "🎵", name: "Music & Audio", count: 312, example: "Session players, mixing, voiceover" },
  { icon: "🎨", name: "Design & Creative", count: 287, example: "Logos, illustration, video editing" },
  { icon: "💻", name: "Tech & Dev", count: 245, example: "Websites, apps, automation" },
  { icon: "✍️", name: "Writing & Content", count: 198, example: "Copywriting, blogs, scripts" },
  { icon: "📸", name: "Photo & Video", count: 176, example: "Photography, filming, editing" },
  { icon: "💪", name: "Health & Fitness", count: 143, example: "Personal training, nutrition plans" },
  { icon: "🍳", name: "Food & Catering", count: 128, example: "Private chefs, meal prep, baking" },
  { icon: "🔧", name: "Home & Trades", count: 167, example: "Repairs, cleaning, gardening" },
  { icon: "📚", name: "Tutoring & Education", count: 221, example: "Any subject, any level" },
  { icon: "🎤", name: "Events & Entertainment", count: 95, example: "DJs, performers, MCs" },
  { icon: "📋", name: "Business & Admin", count: 184, example: "VA, bookkeeping, data entry" },
  { icon: "✨", name: "Other", count: 244, example: "Anything else" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Browse by <span className="text-electric-violet">Category</span>
            </h2>
            <p className="mt-4 text-lg text-muted-gray">
              Find exactly what you need, fast.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.name} delay={i * 50}>
              <a
                href="#"
                className="group block rounded-xl border border-border-subtle bg-surface-dark p-6 transition-all duration-300 hover:border-electric-violet/50 hover:shadow-lg hover:shadow-electric-violet/5"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="font-accent text-xs text-muted-gray">
                    {cat.count} gigs
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-pure-white group-hover:text-electric-violet transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted-gray">{cat.example}</p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
