import AnimateOnScroll from "./AnimateOnScroll";

const trustSignals = [
  { icon: "🔒", title: "Secure Payments", description: "Escrow-protected until work is confirmed." },
  { icon: "✓", title: "Verified Profiles", description: "Email and optional ID verification." },
  { icon: "⭐", title: "Honest Reviews", description: "Every completed gig gets a real review." },
  { icon: "🛡️", title: "Dispute Resolution", description: "Built-in process if something goes wrong." },
  { icon: "💬", title: "Human Support", description: "Real people available via chat." },
];

export default function TrustSafety() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Trust & <span className="text-electric-violet">Safety</span>
            </h2>
            <p className="mt-3 text-muted-gray">
              Built-in protections for buyers and sellers.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustSignals.map((signal) => (
            <AnimateOnScroll key={signal.title}>
              <div className="rounded-xl border border-border-subtle bg-surface-dark p-5 text-center transition-all hover:border-electric-violet/30">
                <span className="text-2xl">{signal.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-pure-white">{signal.title}</h3>
                <p className="mt-1 text-xs text-muted-gray leading-relaxed">{signal.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-12 rounded-xl border-l-4 border-warning-amber bg-warning-amber/5 p-6">
            <div className="flex items-start gap-3">
              <span className="text-xl text-warning-amber flex-shrink-0">⚠️</span>
              <div>
                <h3 className="text-sm font-semibold text-warning-amber">In-Person Services</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-gray">
                  Some services may involve meeting in person. GigForYou connects buyers and sellers but does not vet or employ service providers.{" "}
                  <strong className="text-warning-amber">Arrange in-person services at your own risk.</strong>{" "}
                  We recommend meeting in public first and reading all reviews.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
