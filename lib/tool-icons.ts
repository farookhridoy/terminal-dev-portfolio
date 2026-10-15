import {
  siClaude,
  siCursor,
  siDocker,
  siGit,
  siGithubactions,
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

/** Brand icons by the exact tool name used in lib/content.ts. simple-icons is CC0. */
const brands: Record<string, SimpleIcon> = {
  Claude: siClaude,
  Cursor: siCursor,
  Docker: siDocker,
  Git: siGit,
  "GitHub Actions": siGithubactions,
  Laravel: siLaravel,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  "Nuxt.js": siNuxt,
  React: siReact,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  "Vue.js": siVuedotjs,
};

/** Brands missing from simple-icons (or too small to read, like the MySQL wordmark) get a neutral glyph in ToolChip. */
export const genericGlyph: Record<string, "chat" | "copilot" | "cloud" | "php" | "js" | "db"> = {
  ChatGPT: "chat",
  "GitHub Copilot": "copilot",
  AWS: "cloud",
  PHP: "php",
  JavaScript: "js",
  MySQL: "db",
};

const luminance = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/** A brand colour that is too dark to read on the dark theme falls back to the text colour. */
export function brandIcon(name: string): { path: string; color: string } | null {
  const icon = brands[name];
  if (!icon) return null;
  return { path: icon.path, color: luminance(icon.hex) < 0.3 ? "currentColor" : `#${icon.hex}` };
}
