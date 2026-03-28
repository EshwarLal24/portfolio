import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {site.name}. {site.role}.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link
            href="#projects"
            className="text-slate-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
          >
            Projects
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-slate-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
