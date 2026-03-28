import { site, summary } from "@/lib/site";

const certs = [
  "Flutter Specialization — Coursera",
  "JavaScript Programming — Coursera",
  "Web Development Basics — Udemy",
];

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            About
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
            {summary}
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-zinc-500">
            Available for full-stack roles, AI-assisted products, and Flutter / React Native delivery.
          </p>
        </div>
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500">
              Education
            </h3>
            <p className="mt-2 font-semibold text-slate-900 dark:text-zinc-100">
              Sukkur IBA University
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              BS Computer Science · Oct 2025
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500">
              Certifications
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-zinc-300">
              {certs.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-slate-100 pt-4 dark:border-zinc-800">
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              <span className="font-medium text-slate-800 dark:text-zinc-200">{site.name}</span>
              <br />
              {site.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
