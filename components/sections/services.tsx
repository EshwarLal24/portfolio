const items = [
  {
    title: "AI agents & automation",
    desc: "Task-oriented agents that integrate with your APIs, CRM, and workflows—not just canned replies.",
  },
  {
    title: "RAG & knowledge bots",
    desc: "Retrieval-augmented generation with chunking, citations, and guardrails for trustworthy answers.",
  },
  {
    title: "Multi-model chatbots",
    desc: "Route prompts across providers or models for cost, latency, and quality—one unified chat UI.",
  },
  {
    title: "Customer-facing chat",
    desc: "Embeddable widgets for software-house sites, ecommerce stores, marketing pages, and support.",
  },
  {
    title: "Mobile & web apps",
    desc: "Native-feeling in-app assistants and responsive web experiences with streaming responses.",
  },
  {
    title: "Ongoing optimization",
    desc: "Evals, prompt tuning, and analytics so your bot improves after launch.",
  },
];

export function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          What I build
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
          End-to-end delivery from data ingestion to deployment—aligned with how real businesses use
          AI today.
        </p>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-cyan-700/50"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-700 dark:text-cyan-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-zinc-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
