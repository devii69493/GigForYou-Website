import AnimateOnScroll from "./AnimateOnScroll";

const gigs = [
  {
    title: "Session Guitarist",
    description: "Available for studio recordings & live gigs. Rock, blues, jazz — any genre.",
    seller: "James R.",
    rating: 4.9,
    reviews: 32,
    price: "£45/hr",
    verified: true,
    image: "🎸",
  },
  {
    title: "Logo & Brand Identity Designer",
    description: "Premium logo design with full brand guidelines and source files.",
    seller: "Maya S.",
    rating: 5.0,
    reviews: 61,
    price: "£120",
    verified: true,
    image: "🎨",
  },
  {
    title: "Full-Stack Web Developer",
    description: "Custom websites and web apps built with React, Next.js, and Node.",
    seller: "Arjun P.",
    rating: 4.8,
    reviews: 47,
    price: "£65/hr",
    verified: true,
    image: "💻",
  },
  {
    title: "Private Chef Experience",
    description: "Bespoke dining at your home. Fine dining to casual feasts, up to 12 guests.",
    seller: "Sofia L.",
    rating: 4.9,
    reviews: 28,
    price: "£200",
    verified: true,
    image: "👨‍🍳",
  },
  {
    title: "Personal Fitness Coach",
    description: "Custom training plans & 1-on-1 coaching. Online or in-person in London.",
    seller: "Dan K.",
    rating: 4.7,
    reviews: 19,
    price: "£40/hr",
    verified: true,
    image: "💪",
  },
  {
    title: "Professional Voiceover Artist",
    description: "Warm, engaging voiceovers for ads, explainers, podcasts & audiobooks.",
    seller: "Priya M.",
    rating: 5.0,
    reviews: 53,
    price: "£80",
    verified: true,
    image: "🎙️",
  },
];

export default function FeaturedGigs() {
  return (
    <section id="featured" className="py-24 bg-surface-dark/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured <span className="text-electric-violet">Gigs</span>
              </h2>
              <p className="mt-4 text-lg text-muted-gray">
                Handpicked talent, ready to work.
              </p>
            </div>
            <a
              href="#"
              className="hidden items-center gap-2 text-sm font-semibold text-electric-violet transition-colors hover:text-violet-glow sm:flex"
            >
              View all
              <span>&rarr;</span>
            </a>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {gigs.map((gig, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="gig-card-hover min-w-[320px] max-w-[320px] snap-start rounded-xl border border-border-subtle bg-surface-dark transition-all duration-300 flex-shrink-0">
                <div className="flex h-44 items-center justify-center rounded-t-xl bg-gradient-to-br from-electric-violet/10 to-violet-glow/5">
                  <span className="text-6xl">{gig.image}</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-warning-amber text-sm">&#9733;</span>
                    <span className="font-accent text-sm text-pure-white">
                      {gig.rating}
                    </span>
                    <span className="text-sm text-muted-gray">
                      ({gig.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-pure-white">
                    {gig.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-gray line-clamp-2">
                    {gig.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-electric-violet/20 text-sm font-semibold text-electric-violet">
                      {gig.seller[0]}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-pure-white">
                        {gig.seller}
                      </span>
                      {gig.verified && (
                        <span className="ml-2 inline-flex items-center gap-1 text-xs text-success-green">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-4">
                    <span className="text-sm text-muted-gray">Starting at</span>
                    <span className="font-accent text-lg font-semibold text-pure-white">
                      {gig.price}
                    </span>
                  </div>

                  <button className="mt-4 w-full rounded-lg border border-electric-violet/30 py-2.5 text-sm font-semibold text-electric-violet transition-all hover:bg-electric-violet hover:text-pure-white">
                    View Gig &rarr;
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <a
          href="#"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-electric-violet transition-colors hover:text-violet-glow sm:hidden"
        >
          View all &rarr;
        </a>
      </div>
    </section>
  );
}
