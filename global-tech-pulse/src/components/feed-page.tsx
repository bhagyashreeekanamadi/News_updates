import Image from "next/image";
import Link from "next/link";
import { CategoryFilter } from "@/components/category-filter";
import { UpdateCard } from "@/components/update-card";
import {
  digestHighlights,
  type TechUpdate,
  type UpdateCategory,
} from "@/lib/updates";

const stats = [
  { label: "Tracked updates", value: "128" },
  { label: "Sources online", value: "24" },
  { label: "High priority", value: "9" },
];

export function FeedPage({
  activeCategory = "All",
  updates,
}: {
  activeCategory?: "All" | UpdateCategory;
  updates: TechUpdate[];
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[220px_1fr_320px] lg:px-10">
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Categories
          </p>
          <CategoryFilter />
        </aside>

        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Live feed
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  {activeCategory === "All"
                    ? "Latest updates"
                    : `${activeCategory} updates`}
                </h2>
              </div>
              <label className="block w-full sm:w-64">
                <span className="sr-only">Search updates</span>
                <input
                  className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none ring-slate-950/10 placeholder:text-slate-400 focus:ring-4"
                  placeholder="Search topics"
                  type="search"
                />
              </label>
            </div>
          </div>

          <div className="px-5">
            {updates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Daily digest
            </p>
            <h2 className="mt-1 text-lg font-semibold">Today at a glance</h2>
            <ul className="mt-4 space-y-3">
              {digestHighlights.map((item) => (
                <li className="text-sm leading-6 text-slate-600" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              className="mt-5 inline-flex text-sm font-medium text-slate-950 hover:text-slate-600"
              href="/digest"
            >
              Open digest
            </Link>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Source status
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <StatusRow label="RSS feeds" value="Ready" />
              <StatusRow label="Deduplication" value="Planned" />
              <StatusRow label="AI summaries" value="Next" />
            </div>
            <Link
              className="mt-5 inline-flex text-sm font-medium text-slate-950 hover:text-slate-600"
              href="/admin/sources"
            >
              Manage sources
            </Link>
          </section>
        </aside>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Global Tech Pulse
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link className="hidden hover:text-slate-950 sm:inline" href="/">
              Feed
            </Link>
            <Link
              className="hidden hover:text-slate-950 sm:inline"
              href="/digest"
            >
              Digest
            </Link>
            <Link
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:border-slate-400"
              href="/bookmarks"
            >
              Bookmarks
            </Link>
          </div>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-medium text-slate-500">
              AI, IT, startups, funding, security, and policy.
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              A minimal dashboard for the technology updates that matter.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Scan trusted global updates, understand why they matter, and keep
              a clean daily view without jumping across dozens of tabs.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <div className="relative h-40">
              <Image
                alt="Technology operations dashboard with live market signals"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
              />
            </div>
            <div className="grid grid-cols-3">
              {stats.map((stat) => (
                <div
                  className="border-r border-slate-200 p-4 last:border-r-0"
                  key={stat.label}
                >
                  <div className="font-mono text-2xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-950">{value}</span>
    </div>
  );
}
