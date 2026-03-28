const blocks = [
  {
    title: "Full website ingestion",
    desc: "Crawl and normalize content so your bot reflects the whole public site—not only the homepage.",
  },
  {
    title: "Nested & multi-page sites",
    desc: "Handle deep navigation trees, section silos, and cross-links with sane chunk boundaries.",
  },
  {
    title: "Single-page applications",
    desc: "Render-aware extraction for SPAs where content loads dynamically after first paint.",
  },
  {
    title: "PDF & document RAG",
    desc: "Tables, headers, and long manuals split intelligently for retrieval with source pointers.",
  },
];

export function Knowledge() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Knowledge that matches reality
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Scraping and ingestion pipelines tailored to your stack: static sites, nested
              hierarchies, client-rendered pages, and PDF libraries—fed into embeddings and a RAG
              layer your users can trust.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                Respectful crawling, caching, and refresh strategies
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                Optional citation UI so answers stay verifiable
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                PII-aware design for regulated or internal use cases
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-5 dark:border-zinc-700 dark:bg-zinc-900/50"
              >
                <h3 className="font-semibold text-slate-900 dark:text-zinc-100">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
