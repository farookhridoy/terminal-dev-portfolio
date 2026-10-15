import { ArrowUpRight, Linkedin } from "lucide-react";
import { linkedinPosts } from "@/lib/content";

export default function PostsTab() {
  return (
    <section aria-label="Featured LinkedIn posts">
      <h2 className="mb-1 text-xl font-semibold tracking-tight">Featured posts</h2>
      <p className="mb-5 text-sm text-muted-foreground">Selected posts from my LinkedIn. Each one opens on LinkedIn.</p>
      <ul className="space-y-3">
        {linkedinPosts.map((p) => (
          <li key={p.id}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/60"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary">
                <Linkedin className="h-5 w-5 text-primary" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{p.title}</span>
                <span className="block text-xs text-muted-foreground">LinkedIn post</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
