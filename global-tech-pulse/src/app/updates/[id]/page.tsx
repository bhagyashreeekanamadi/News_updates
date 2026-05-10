import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryRoutes,
  getRelatedUpdates,
  getUpdateById,
  updates,
} from "@/lib/updates";

export function generateStaticParams() {
  return updates.map((update) => ({ id: update.id }));
}

export default async function UpdateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const update = getUpdateById(id);

  if (!update) {
    notFound();
  }

  const relatedUpdates = getRelatedUpdates(update);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8">
        <nav className="mb-8 flex items-center justify-between text-sm">
          <Link className="font-semibold text-slate-950" href="/">
            Global Tech Pulse
          </Link>
          <Link className="text-slate-500 hover:text-slate-950" href="/">
            Back to feed
          </Link>
        </nav>

        <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
            <Image
              alt={update.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 832px"
              src={update.imageUrl}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link
              className="font-medium text-slate-900 hover:text-slate-600"
              href={categoryRoutes[update.category]}
            >
              {update.category}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{update.source}</span>
            <span aria-hidden="true">/</span>
            <span>{update.region}</span>
            <span aria-hidden="true">/</span>
            <time>{update.publishedAt}</time>
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {update.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {update.summary}
          </p>

          <section className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Key points
            </h2>
            <ul className="mt-4 space-y-3">
              {update.keyPoints.map((point) => (
                <li className="text-sm leading-6 text-slate-700" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Why it matters
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {update.whyItMatters}
            </p>
          </section>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white hover:bg-slate-700"
              href={update.sourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              Original source
            </a>
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-4 text-sm font-medium text-slate-700">
              Save update
            </button>
          </div>
        </article>

        {relatedUpdates.length > 0 ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Related
            </h2>
            <div className="mt-4 space-y-4">
              {relatedUpdates.map((item) => (
                <Link
                  className="block text-sm font-medium leading-6 text-slate-950 hover:text-slate-600"
                  href={`/updates/${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
