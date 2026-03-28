"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site, summary } from "@/lib/site";

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-slate-50 via-white to-white dark:border-zinc-800/60 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 bg-zinc-950/5 dark:bg-black/20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.p
          {...fade}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-800 dark:border-cyan-900/50 dark:bg-cyan-950/40 dark:text-cyan-300"
        >
          {site.role} · MERN · AI · Mobile
        </motion.p>
        <motion.h1
          {...fade}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400">
            {site.name}
          </span>
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400"
        >
          {summary}
        </motion.p>
        <motion.div
          {...fade}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/30 transition hover:from-cyan-500 hover:to-indigo-500 dark:shadow-cyan-500/20"
          >
            Get in touch
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition hover:border-cyan-400 hover:bg-slate-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-cyan-500/50 dark:hover:bg-zinc-800"
          >
            View projects
          </Link>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            { k: "Current", v: "Decrypted Labs" },
            { k: "Focus", v: "AI + full-stack web" },
            { k: "Mobile", v: "Flutter & React Native" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-500">
                {row.k}
              </dt>
              <dd className="mt-1 font-semibold text-slate-900 dark:text-zinc-100">{row.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
