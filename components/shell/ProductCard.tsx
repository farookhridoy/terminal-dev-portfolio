import { ArrowUpRight } from "lucide-react";
import Chip from "./Chip";
type Product = { name: string; line: string; tags: readonly string[]; image: string; href: string };

/** A product built under theLaraSoft: a browser-framed screenshot of the live site, with a one-line summary. */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="border-b border-border bg-secondary">
        <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-border" />
          <i className="h-2 w-2 rounded-full bg-border" />
          <i className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="aspect-[16/9] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.name}: screenshot of the live site`}
            width={1400}
            height={812}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{p.name}</h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </a>
  );
}
