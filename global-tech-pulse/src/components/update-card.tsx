import Image from "next/image";
import Link from "next/link";
import { categoryRoutes, type TechUpdate } from "@/lib/updates";

const importanceStyles = {
  High: "border-red-200 bg-red-50 text-red-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Low: "border-slate-200 bg-slate-50 text-slate-600",
};

export function UpdateCard({ update }: { update: TechUpdate }) {
  return (
    <article className="border-b border-slate-200 py-5 last:border-b-0">
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

      <div className="mt-3 grid gap-4 sm:grid-cols-[132px_1fr_auto] sm:items-start">
        <Link
          className="relative block aspect-[4/3] overflow-hidden rounded-md bg-slate-100"
          href={`/updates/${update.id}`}
        >
          <Image
            alt={update.imageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, 132px"
            src={update.imageUrl}
          />
        </Link>

        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold leading-7 text-slate-950">
            <Link
              href={`/updates/${update.id}`}
              className="hover:text-slate-600"
            >
              {update.title}
            </Link>
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {update.summary}
          </p>
        </div>

        <span
          className={`w-fit rounded-md border px-2.5 py-1 text-xs font-medium ${importanceStyles[update.importance]}`}
        >
          {update.importance}
        </span>
      </div>
    </article>
  );
}
