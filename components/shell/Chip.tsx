export default function Chip({ children, tone = "plain" }: { children: React.ReactNode; tone?: "plain" | "accent" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium ${
        tone === "accent"
          ? "border-primary/30 bg-accent text-accent-foreground"
          : "border-border bg-card text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}
