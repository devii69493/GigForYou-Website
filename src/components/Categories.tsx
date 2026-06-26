import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  { icon: "🎵", name: "Music & Audio" },
  { icon: "🎨", name: "Design & Creative" },
  { icon: "💻", name: "Tech & Dev" },
  { icon: "✍️", name: "Writing & Content" },
  { icon: "📸", name: "Photo & Video" },
  { icon: "💪", name: "Health & Fitness" },
  { icon: "🍳", name: "Food & Catering" },
  { icon: "🔧", name: "Home & Trades" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight">
            What you can find on <span className="text-violet">GigForYou</span>
          </h2>
          <p className="mt-3 text-center text-gray-500">Services across every category.</p>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.name} delay={i * 50}>
              <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-2 text-sm font-medium text-gray-900">{cat.name}</h3>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
