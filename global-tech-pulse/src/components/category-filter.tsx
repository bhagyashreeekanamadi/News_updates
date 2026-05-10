"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, categoryRoutes } from "@/lib/updates";

export function CategoryFilter() {
  const pathname = usePathname();

  return (
    <div className="mt-4 flex gap-2 overflow-x-auto lg:flex-col">
      {categories.map((category) => {
        const href = category === "All" ? "/" : categoryRoutes[category];
        const isActive =
          category === "All" ? pathname === "/" : pathname === href;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`min-h-11 cursor-pointer whitespace-nowrap rounded-md px-4 py-2.5 text-left text-sm transition-colors ${
              isActive
                ? "bg-slate-950 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
            href={href}
            key={category}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}
