import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] gap-x-4 gap-y-3 px-4 py-3 sm:px-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-y-0 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight text-slate-900 dark:text-zinc-50"
        >
          <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-indigo-400">
            {site.name}
          </span>
        </Link>
        <div className="flex items-center justify-end gap-2 md:order-3">
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-500 hover:to-indigo-500 dark:shadow-cyan-500/15"
          >
            Let&apos;s talk
          </Link>
        </div>
        <nav
          className="col-span-2 flex gap-4 overflow-x-auto pb-1 text-sm font-medium md:col-span-1 md:order-2 md:justify-center md:overflow-visible md:pb-0"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-slate-600 transition hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
