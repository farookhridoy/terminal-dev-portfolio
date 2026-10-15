import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { profile, socialLinks } from "@/lib/content";

// lucide has no X logo, so X is drawn as a letter.
const XMark: LucideIcon = (() => <span aria-hidden="true" className="text-sm font-bold leading-none">X</span>) as unknown as LucideIcon;

const icons: Record<(typeof socialLinks)[number]["id"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  x: XMark,
  facebook: Facebook,
  instagram: Instagram,
};

/** Contact card and profile links. Sits in the right column on wide screens and under the content elsewhere. */
export default function RightRail() {
  return (
    <div id="contact" className="space-y-6 scroll-mt-24">
      <section className="rounded-2xl border border-border bg-card p-5">
        <h2 className="text-base font-semibold">Let&apos;s work together</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          ERP systems, fintech platforms or technical leadership. The quickest way to reach me is a message on LinkedIn.
        </p>
        <a
          href="https://linkedin.com/in/farookhridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Linkedin className="h-4 w-4" />
          Message on LinkedIn
        </a>
      </section>

      <section aria-labelledby="find-me">
        <h2 id="find-me" className="mb-3 px-1 text-base font-semibold">
          Find me on
        </h2>
        <ul className="space-y-2">
          {socialLinks.map(({ id, label, handle, href }) => {
            const Icon = icons[id];
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition-colors hover:border-primary/60"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-xs text-muted-foreground">{handle}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="px-1 text-xs text-muted-foreground">
        {profile.location} · <a className="underline-offset-2 hover:underline" href={profile.site}>farookhridoy.com</a>
      </p>
    </div>
  );
}
