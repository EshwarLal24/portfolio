import Link from "next/link";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-600 via-indigo-600 to-violet-700 p-px shadow-2xl shadow-indigo-500/20 dark:border-zinc-700 dark:shadow-indigo-900/30">
        <div className="rounded-[calc(1.5rem-1px)] bg-white px-8 py-14 dark:bg-zinc-950 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Hiring for full-stack, AI, or mobile? Send a message with your role, stack, and
              timeline — I&apos;ll respond with availability and next steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-zinc-400">
              <span>{site.location}</span>
              <span className="hidden sm:inline">·</span>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                {site.phone}
              </a>
            </div>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:from-cyan-500 hover:to-indigo-500"
              >
                Fiverr
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition hover:border-cyan-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-cyan-500/50"
              >
                Email {site.name.split(" ")[0]}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition hover:border-cyan-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-cyan-500/50"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition hover:border-cyan-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-cyan-500/50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
