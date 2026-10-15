import { linkedinPosts } from "@/lib/content";

export default function PostsTab() {
  return (
    <section aria-label="Featured LinkedIn posts">
      <h2 className="mb-1 text-xl font-semibold tracking-tight">Featured posts</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Selected posts from{" "}
        <a className="text-primary hover:underline" href="https://www.linkedin.com/in/farookhridoy/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {linkedinPosts.map((src, i) => (
          <li key={src} className="overflow-hidden rounded-2xl border border-border bg-white">
            <iframe src={src} title={`LinkedIn post ${i + 1}`} loading="lazy" width="100%" height="560" className="block w-full" />
          </li>
        ))}
      </ul>
    </section>
  );
}
