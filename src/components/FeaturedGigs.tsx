import AnimateOnScroll from "./AnimateOnScroll";

const gigs = [
  {
    title: "Session Guitarist",
    description: "Studio recordings & live gigs. Any genre.",
    seller: "James R.",
    rating: 4.9,
    reviews: 32,
    price: "£45/hr",
    image: "🎸",
  },
  {
    title: "Logo & Brand Designer",
    description: "Premium logos with full brand guidelines.",
    seller: "Maya S.",
    rating: 5.0,
    reviews: 61,
    price: "£120",
    image: "🎨",
  },
  {
    title: "Full-Stack Developer",
    description: "Custom websites and apps. React & Node.",
    seller: "Arjun P.",
    rating: 4.8,
    reviews: 47,
    price: "£65/hr",
    image: "💻",
  },
  {
    title: "Private Chef Experience",
    description: "Bespoke dining at your home, up to 12 guests.",
    seller: "Sofia L.",
    rating: 4.9,
    reviews: 28,
    price: "£200",
    image: "👨‍🍳",
  },
];

export default function FeaturedGigs() {
  return (
    <section id="featured" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Featured <span className="text-electric-violet">Gigs</span>
            </h2>
            <p className="mt-3 text-muted-gray">
              Handpicked talent, ready to work.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gigs.map((gig, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="gig-card-hover rounded-xl border border-border-subtle bg-surface-dark transition-all duration-300">
                <div className="flex h-36 items-center justify-center rounded-t-xl bg-gradient-to-br from-electric-violet/10 to-violet-glow/5">
                  <span className="text-5xl">{gig.image}</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-pure-white">{gig.title}</h3>
                    <span className="flex items-center gap-1 text-xs">
                      <span className="text-warning-amber">&#9733;</span>
                      <span className="font-accent text-pure-white">{gig.rating}</span>
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-muted-gray">{gig.description}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-violet/20 text-xs font-semibold text-electric-violet">
                        {gig.seller[0]}
                      </div>
                      <span className="text-xs text-muted-gray">{gig.seller}</span>
                    </div>
                    <span className="font-accent text-sm font-semibold text-pure-white">{gig.price}</span>
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
