import Image from "next/image";
import Link from "next/link";
import { SimpleNav } from "@/components/simple-nav";
import { updates } from "@/lib/updates";

const bookmarkedUpdates = updates.slice(0, 2);

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8">
        <SimpleNav />

        <section className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-500">Saved updates</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Bookmarks
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            This is the saved-reading view from the PRD. Authentication and real
            user-specific bookmarks can be connected after the database is in
            place.
          </p>

          <div className="mt-6 divide-y divide-slate-200">
            {bookmarkedUpdates.map((update) => (
              <Link
                className="grid gap-4 py-5 hover:text-slate-600 sm:grid-cols-[140px_1fr]"
                href={`/updates/${update.id}`}
                key={update.id}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                  <Image
                    alt={update.imageAlt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, 140px"
                    src={update.imageUrl}
                  />
                </div>
                <div>
                  <div className="text-xs text-slate-500">
                    {update.category} / {update.source} / {update.publishedAt}
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-slate-950">
                    {update.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {update.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
