const roles = [
  {
    title: "MERN Stack Engineer",
    company: "Decrypted Labs",
    location: "Karachi, Pakistan",
    period: "Jan 2026 – Present",
    highlights: [
      "Design, build, and maintain frontend and full-stack apps with React.js, Next.js, and Express.js.",
      "Ship AI-powered features with LLMs and vector embeddings for search, automation, and natural language UX.",
    ],
  },
  {
    title: "Junior Flutter Developer",
    company: "Icreativez Technologies",
    location: "Karachi, Pakistan",
    period: "Nov 2024 – Jun 2025",
    highlights: [
      "Delivered Flutter and React Native apps with a focus on performance and maintainability.",
      "Collaborated with design and backend teams on user-focused mobile solutions.",
      "Testing and debugging for cross-platform reliability.",
    ],
  },
];

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
        Experience
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-zinc-400">
        Full-stack web and cross-platform mobile — from production MERN apps to AI-augmented features.
      </p>
      <ol className="relative mt-12 space-y-0 border-l border-slate-200 pl-8 dark:border-zinc-700">
        {roles.map((job) => (
          <li key={job.company + job.period} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan-500 bg-white dark:bg-zinc-950" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">
                  {job.title}
                </h3>
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
                  {job.company} · {job.location}
                </p>
              </div>
              <time className="text-sm text-slate-500 dark:text-zinc-500">{job.period}</time>
            </div>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
