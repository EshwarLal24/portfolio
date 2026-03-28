/** Stylized UI mockups (SVG) — no external image assets */

function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-slate-50 shadow-inner dark:border-zinc-700/80 dark:from-zinc-900 dark:to-zinc-950 ${className}`}
    >
      {children}
    </div>
  );
}

export function ArtTorogi() {
  return (
    <Frame className="aspect-[4/3] p-4">
      <div className="flex h-full flex-col rounded-xl bg-white p-3 shadow-sm dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-zinc-800">
          <span className="text-xs font-bold text-slate-800 dark:text-zinc-100">Torogi</span>
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-[10px] dark:bg-cyan-950">
            🔔
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
          </span>
        </div>
        <div className="mt-2 space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex gap-2 rounded-lg bg-slate-50 p-2 dark:bg-zinc-800/80"
            >
              <div className="h-8 w-8 shrink-0 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 opacity-80" />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="h-2 w-3/4 rounded bg-slate-200 dark:bg-zinc-600" />
                <div className="h-1.5 w-1/2 rounded bg-slate-100 dark:bg-zinc-700" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex justify-center pt-2">
          <div className="rounded-full bg-cyan-500/20 px-3 py-1 text-[9px] font-semibold text-cyan-800 dark:text-cyan-300">
            Live updates
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ArtIndoorMap() {
  return (
    <Frame className="aspect-[4/3] p-3">
      <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="gmap" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect width="200" height="150" rx="12" fill="url(#gmap)" />
        <path
          d="M30 120 L60 90 L100 100 L140 70 L170 40"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <circle cx="30" cy="120" r="6" fill="#22c55e" />
        <circle cx="170" cy="40" r="8" fill="#ef4444" />
        <rect x="75" y="55" width="50" height="28" rx="4" fill="white" opacity="0.9" />
        <text x="100" y="72" textAnchor="middle" fill="#334155" fontSize="8" fontWeight="700">
          Store
        </text>
      </svg>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium text-slate-600 shadow dark:bg-zinc-900/90 dark:text-zinc-300">
        Indoor navigation
      </p>
    </Frame>
  );
}

export function ArtSocialFeed() {
  return (
    <Frame className="aspect-[4/3] p-4">
      <div className="flex h-full flex-col gap-2 rounded-xl bg-white p-3 dark:bg-zinc-900">
        <div className="flex items-center gap-2 rounded-lg bg-indigo-50 p-2 dark:bg-indigo-950/40">
          <div className="h-8 w-8 rounded-full bg-indigo-400" />
          <div className="h-2 w-24 rounded bg-indigo-200 dark:bg-indigo-800" />
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-slate-100 p-2 dark:border-zinc-800">
            <div className="h-1.5 w-full rounded bg-slate-100 dark:bg-zinc-800" />
            <div className="mt-1 h-1.5 w-4/5 rounded bg-slate-50 dark:bg-zinc-800/80" />
          </div>
        ))}
        <div className="mt-auto flex justify-center">
          <div className="rounded-full bg-indigo-600 px-4 py-1.5 text-[9px] font-semibold text-white">
            New post
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ArtReceiptScanner() {
  return (
    <Frame className="aspect-[4/3] p-3">
      <div className="relative flex h-full flex-col items-center justify-center gap-2">
        <div className="relative w-[70%] rotate-[-4deg] rounded-lg border-2 border-dashed border-cyan-400 bg-white p-3 shadow-lg dark:bg-zinc-900">
          <div className="space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-slate-200 dark:bg-zinc-700" />
            <div className="h-1.5 w-full rounded bg-slate-100 dark:bg-zinc-800" />
            <div className="h-1.5 w-2/3 rounded bg-slate-100 dark:bg-zinc-800" />
          </div>
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-[10px] text-white shadow">
            ✨
          </div>
        </div>
        <p className="text-center text-[10px] font-semibold text-cyan-700 dark:text-cyan-400">
          Gemini · extract & store
        </p>
      </div>
    </Frame>
  );
}

export function ArtEventFinder() {
  return (
    <Frame className="aspect-[4/3] p-2">
      <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden>
        <rect width="200" height="150" rx="12" fill="#f1f5f9" />
        <path d="M0 100 Q50 80 100 100 T200 90 L200 150 L0 150 Z" fill="#cbd5e1" />
        <circle cx="60" cy="70" r="4" fill="#ef4444" />
        <circle cx="120" cy="55" r="4" fill="#22c55e" />
        <circle cx="150" cy="85" r="4" fill="#ef4444" />
        <rect x="70" y="40" width="60" height="8" rx="2" fill="#94a3b8" />
        <text x="100" y="46" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="700">
          Nearby
        </text>
      </svg>
      <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 p-2 shadow dark:bg-zinc-900/95">
        <div className="h-2 w-3/4 rounded bg-slate-200 dark:bg-zinc-700" />
        <div className="mt-1 h-1.5 w-1/2 rounded bg-slate-100 dark:bg-zinc-800" />
      </div>
    </Frame>
  );
}
