const rows = [
  {
    title: "Software houses & agencies",
    body: "Portfolio-aware assistants that explain services, tech stacks, and engagement models—ideal for lead capture.",
  },
  {
    title: "Ecommerce",
    body: "Product-aware bots with policy-safe answers, shipping FAQs, and handoff to human support when needed.",
  },
  {
    title: "Websites & landing pages",
    body: "Fast embeds for marketing sites: capture intent, qualify visitors, and sync with your stack.",
  },
  {
    title: "Mobile applications",
    body: "In-app chat with secure backends, optional voice, and branding that matches your UI guidelines.",
  },
];

export function Industries() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Built for your channel
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-zinc-400">
          Same engineering discipline whether you ship a storefront, a SaaS marketing site, or a
          client project for a software house.
        </p>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {rows.map((row) => (
            <article
              key={row.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-zinc-100">{row.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {row.body}
                </p>
              </div>
            </article>
          ))}
        </div>
    </div>
  );
}
