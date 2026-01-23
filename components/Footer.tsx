import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span>© 2024 All Rights and Reserved by Omar Farook Hridoy</span>
          </div>

          <div className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-terminal-red fill-terminal-red" />
            <span>and lots of</span>
            <span className="text-terminal-yellow">☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
