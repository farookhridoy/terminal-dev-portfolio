import { Bot, Cloud, Database, Sparkles } from "lucide-react";
import Chip from "./Chip";
import { brandIcon, genericGlyph } from "@/lib/tool-icons";

function Glyph({ name }: { name: string }) {
  const brand = brandIcon(name);
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true" fill={brand.color}>
        <path d={brand.path} />
      </svg>
    );
  }
  switch (genericGlyph[name]) {
    case "chat":
      return <Sparkles className="h-4 w-4 shrink-0 text-[#10a37f]" aria-hidden="true" />;
    case "copilot":
      return <Bot className="h-4 w-4 shrink-0 text-[#8957e5]" aria-hidden="true" />;
    case "cloud":
      return <Cloud className="h-4 w-4 shrink-0 text-[#f29100]" aria-hidden="true" />;
    case "db":
      return <Database className="h-4 w-4 shrink-0 text-[#4479a1]" aria-hidden="true" />;
    case "php":
      return <span aria-hidden="true" className="text-[10px] font-extrabold leading-none text-[#7a86b8]">php</span>;
    case "js":
      return (
        <span aria-hidden="true" className="grid h-4 w-4 shrink-0 place-items-end rounded-[3px] bg-[#f7df1e] pr-[2px] text-[9px] font-extrabold leading-[1.2] text-black">
          JS
        </span>
      );
    default:
      return null;
  }
}

/** A tool or technology chip with its logo. Unknown names render as a plain chip. */
export default function ToolChip({ name, tone = "plain" }: { name: string; tone?: "plain" | "accent" }) {
  return (
    <Chip tone={tone}>
      <span className="mr-2 inline-flex items-center">
        <Glyph name={name} />
      </span>
      {name}
    </Chip>
  );
}
