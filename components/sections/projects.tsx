"use client";

import { motion } from "framer-motion";
import {
  ArtEventFinder,
  ArtIndoorMap,
  ArtReceiptScanner,
  ArtSocialFeed,
  ArtTorogi,
} from "@/components/projects/project-artwork";

const projects = [
  {
    title: "Torogi Job Finder",
    desc: "Flutter + Supabase — real-time job listings, updates, and notification flows.",
    stack: ["Flutter", "Supabase", "Realtime"],
    Art: ArtTorogi,
  },
  {
    title: "Indoor Map Navigation",
    desc: "Flutter, Firebase, and Mappdin API for accurate in-store navigation.",
    stack: ["Flutter", "Firebase", "Maps API"],
    Art: ArtIndoorMap,
  },
  {
    title: "Social Media Frontend",
    desc: "AngularJS + Firebase — post creation and live feed experience.",
    stack: ["AngularJS", "Firebase"],
    Art: ArtSocialFeed,
  },
  {
    title: "Receipt Scanner",
    desc: "React Native + Gemini — scan receipts, extract fields with AI, offline-friendly storage.",
    stack: ["React Native", "Gemini API"],
    Art: ArtReceiptScanner,
  },
  {
    title: "Local Event Finder",
    desc: "Flutter + Firebase + Google Maps — discover nearby events with live location.",
    stack: ["Flutter", "Firebase", "Google Maps"],
    Art: ArtEventFinder,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-slate-200/60 bg-white py-20 dark:border-zinc-800/60 dark:bg-zinc-950"
    >
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-zinc-400">
          Selected builds spanning mobile, web, maps, and AI — each with a clear product goal and
          stack.
        </p>
        <motion.ul
          className="mt-12 grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
          variants={listVariants}
        >
          {projects.map(({ Art, ...p }) => (
            <motion.li
              key={p.title}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-cyan-700/40"
            >
              <Art />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
