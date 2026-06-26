const trustSignals = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Secure Payments",
    description: "All payments held in escrow until work is confirmed complete.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Verified Profiles",
    description: "Sellers verify email and optionally ID for in-person gigs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "Reviews & Ratings",
    description: "Every completed gig gets a review — no fake boosting.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Dispute Resolution",
    description: "Built-in dispute process if something goes wrong.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Support",
    description: "Real human support available via chat.",
  },
];

export default function TrustSafety() {
  return (
    <section className="py-24 bg-surface-dark/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trust & <span className="text-electric-violet">Safety</span>
          </h2>
          <p className="mt-4 text-lg text-muted-gray">
            Built-in protections for both buyers and sellers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-xl border border-border-subtle bg-surface-dark p-6 transition-all hover:border-electric-violet/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-violet/10 text-electric-violet">
                {signal.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-pure-white">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm text-muted-gray leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border-l-4 border-warning-amber bg-warning-amber/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-2xl text-warning-amber">
              ⚠️
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warning-amber">
                In-Person Services Disclaimer
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-gray">
                Some services on GigForYou may involve the service provider
                visiting your location, or you visiting theirs. By booking an
                in-person service, you acknowledge that you are voluntarily
                sharing your personal information (including address) directly
                with the service provider. GigForYou is a platform connecting
                buyers and sellers and does not vet, employ, or vouch for
                individual service providers.{" "}
                <strong className="text-warning-amber">
                  Arrange in-person services at your own risk.
                </strong>{" "}
                We strongly recommend meeting in public first, reading all
                reviews, and using your own judgment before sharing personal
                information. GigForYou is not liable for any incidents arising
                from in-person service arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
