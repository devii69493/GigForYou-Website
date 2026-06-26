import AnimateOnScroll from "./AnimateOnScroll";

const signals = [
  { icon: "🔒", title: "Escrow Payments", desc: "Money held safely until work is confirmed." },
  { icon: "✓", title: "Verified Profiles", desc: "Email and optional ID verification." },
  { icon: "⭐", title: "Honest Reviews", desc: "Real reviews on every completed gig." },
  { icon: "🛡️", title: "Dispute Resolution", desc: "Built-in process if something goes wrong." },
];

export default function TrustSafety() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight">
            Built on <span className="text-violet">trust</span>
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {signals.map((s) => (
            <AnimateOnScroll key={s.title}>
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <span className="text-xl">{s.icon}</span>
                <h3 className="mt-2 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-10 rounded-xl border-l-4 border-amber bg-amber-50 p-5">
            <p className="text-xs text-gray-600">
              <strong className="text-amber">In-person services:</strong> GigForYou connects buyers and sellers but does not vet or employ providers. Arrange in-person services at your own risk. We recommend meeting in public first.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
