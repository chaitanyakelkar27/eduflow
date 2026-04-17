export default function Home() {
  const quickStats = [
    { label: "Courses in progress", value: "06" },
    { label: "Assignments due", value: "03" },
    { label: "Live sessions today", value: "02" },
  ];

  const todaysAgenda = [
    {
      title: "System Design Lab",
      slot: "09:30 - 11:00",
      badge: "Live",
      tone:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-200",
    },
    {
      title: "React Query Sprint",
      slot: "13:00 - 14:15",
      badge: "Workshop",
      tone: "bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-200",
    },
    {
      title: "Database Optimization Quiz",
      slot: "20:00 - 20:30",
      badge: "Quiz",
      tone:
        "bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-200",
    },
  ];

  const learningTracks = [
    {
      name: "Backend Engineering",
      progress: 72,
      accent: "from-teal-400 to-cyan-500",
    },
    {
      name: "Frontend Mastery",
      progress: 54,
      accent: "from-fuchsia-400 to-rose-500",
    },
    {
      name: "AI Foundations",
      progress: 39,
      accent: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f6fff9_0%,#eef3ff_48%,#fffaf0_100%)] text-foreground dark:bg-[linear-gradient(180deg,#071019_0%,#070e18_48%,#120f0a_100%)]">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-300/40 blur-3xl dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute -right-20 top-28 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl dark:bg-amber-500/20" />

      <main className="mx-auto grid min-h-screen w-full max-w-6xl gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:px-12 lg:gap-10 lg:px-16">
        <section className="z-10 flex flex-col gap-8">
          <header className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-slate-950/5 backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-900/50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              EduFlow Learning Studio
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Build job-ready skills with guided, momentum-based learning.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg dark:text-slate-300">
              Track progress, join live classes, and complete practical labs from
              one focused workspace built for learners.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-slate-700 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400">
                Continue Learning
              </button>
              <button className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500">
                Explore Tracks
              </button>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickStats.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
              >
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <section className="rounded-4xl border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-950/5 backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-900/50">
            <h2 className="text-xl font-semibold">Learning Tracks</h2>
            <div className="mt-6 space-y-5">
              {learningTracks.map((track) => (
                <article key={track.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      {track.name}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                      {track.progress}%
                    </p>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className={`h-3 rounded-full bg-linear-to-r ${track.accent}`}
                      style={{ width: `${track.progress}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="z-10 flex flex-col gap-5">
          <section className="rounded-4xl border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-950/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/55">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
              Today at a glance
            </p>
            <ul className="mt-5 space-y-4">
              {todaysAgenda.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {item.title}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${item.tone}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {item.slot}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-4xl border border-cyan-200 bg-linear-to-br from-cyan-50 via-sky-50 to-indigo-100 p-6 shadow-lg shadow-cyan-900/10 dark:border-cyan-900/60 dark:from-cyan-950/60 dark:via-slate-900 dark:to-indigo-950/40">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-300">
              Streak Mode
            </p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              18 days
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Keep your momentum. Complete one lesson today to extend your run.
            </p>
            <button className="mt-5 w-full rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400">
              Resume Last Lesson
            </button>
          </section>
        </aside>
      </main>
    </div>
  );
}
