const tags = [
  "React.js & Next.js",
  "Express.js + Node",
  "LLMs & vector embeddings",
  "Flutter & Dart",
  "React Native / Expo",
  "Firebase & Supabase",
  "AngularJS",
  "Git & REST APIs",
  "Google Maps API",
];

export function Tech() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
        Skills & stack
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 dark:text-zinc-400">
        Mobile and web delivery plus AI features — from production MERN work at Decrypted Labs to
        Flutter and React Native apps.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
