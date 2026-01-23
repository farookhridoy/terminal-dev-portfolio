"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> ./send_message.sh
          </h2>
          <p className="text-muted-foreground">Let's build something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <TerminalWindow title="contact_info.json">
            <div className="space-y-6">
              <div className="text-terminal-purple mb-4">{"// Get in touch"}</div>

              <div className="space-y-4">
                <a
                  href="mailto:me@farookhridoy.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-terminal-cyan group-hover:text-primary" />
                  <span>me@farookhridoy.com</span>
                </a>

                <a
                  href="tel:+8801822521 98"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 text-terminal-green group-hover:text-primary" />
                  <span>+88 0182252198</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-terminal-yellow" />
                  <span>H#91 R#9/1 South Bansree B #E Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-terminal-purple mb-4">{"// Social links"}</div>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/farookhridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/farookhridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/farookhridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/farookhridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/FarookHridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="new_message.sh">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-terminal-cyan text-sm mb-2 block">
                  <span className="text-muted-foreground">const</span> name <span className="text-muted-foreground">=</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder='"Your Name"'
                />
              </div>

              <div>
                <label className="text-terminal-cyan text-sm mb-2 block">
                  <span className="text-muted-foreground">const</span> email <span className="text-muted-foreground">=</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder='"you@email.com"'
                />
              </div>

              <div>
                <label className="text-terminal-cyan text-sm mb-2 block">
                  <span className="text-muted-foreground">const</span> message <span className="text-muted-foreground">=</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder='"Your message here..."'
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              >
                <Send className="w-4 h-4" />
                ./submit.sh
              </button>
            </form>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
