import Link from "next/link";

export function SimpleNav() {
  return (
    <nav className="mb-8 flex items-center justify-between text-sm">
      <Link className="font-semibold text-slate-950" href="/">
        Global Tech Pulse
      </Link>
      <div className="flex items-center gap-4 text-slate-500">
        <Link className="hover:text-slate-950" href="/">
          Feed
        </Link>
        <Link className="hover:text-slate-950" href="/digest">
          Digest
        </Link>
        <Link className="hover:text-slate-950" href="/bookmarks">
          Bookmarks
        </Link>
      </div>
    </nav>
  );
}
