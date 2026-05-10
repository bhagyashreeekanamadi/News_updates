import { SimpleNav } from "@/components/simple-nav";
import { sources } from "@/lib/updates";

export default function AdminSourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <SimpleNav />

        <section className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Admin / Sources
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                Source management
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Track source quality, status, and ingestion cadence before the
                real ingestion worker is connected.
              </p>
            </div>
            <button className="h-10 rounded-md bg-slate-950 px-4 text-sm font-medium text-white">
              Add source
            </button>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-3 font-semibold">Source</th>
                  <th className="py-3 font-semibold">Category</th>
                  <th className="py-3 font-semibold">Status</th>
                  <th className="py-3 font-semibold">Cadence</th>
                  <th className="py-3 font-semibold">Trust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {sources.map((source) => (
                  <tr key={source.name}>
                    <td className="py-4 font-medium text-slate-950">
                      {source.name}
                    </td>
                    <td className="py-4 text-slate-600">{source.category}</td>
                    <td className="py-4 text-slate-600">{source.status}</td>
                    <td className="py-4 text-slate-600">{source.cadence}</td>
                    <td className="py-4 text-slate-600">{source.trustLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
