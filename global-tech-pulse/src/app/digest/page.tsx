import Link from "next/link";
import { SimpleNav } from "@/components/simple-nav";
import { digestHighlights, updates } from "@/lib/updates";

export default function DigestPage() {
  const highPriority = updates.filter((update) => update.importance === "High");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <SimpleNav />

        <section className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-500">
            Daily digest / Today
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            The short version
          </h1>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Highlights
              </h2>
              <ul className="mt-4 space-y-4">
                {digestHighlights.map((highlight) => (
                  <li className="leading-7 text-slate-700" key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Coverage
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <Row label="AI" value="1 key update" />
                <Row label="Startups" value="1 key update" />
                <Row label="Security" value="1 key update" />
                <Row label="Policy" value="1 key update" />
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            High priority
          </h2>
          <div className="mt-4 divide-y divide-slate-200">
            {highPriority.map((update) => (
              <Link
                className="block py-4 text-sm font-medium leading-6 text-slate-950 hover:text-slate-600"
                href={`/updates/${update.id}`}
                key={update.id}
              >
                {update.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-950">{value}</span>
    </div>
  );
}
