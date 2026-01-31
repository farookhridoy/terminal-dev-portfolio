"use client"

import { motion } from "framer-motion";
import { Linkedin, Github, Facebook, Instagram, Twitter } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const ContactSection = () => {


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

        <div className="grid md:grid-cols-1 gap-8">
          <TerminalWindow title="contact_info.json">
            <div className="space-y-6">
              <div className="text-terminal-purple mb-4">{"// Get in touch"}</div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-terminal-green">if</span> (want_to_hire_me) {"{"}
                  </p>
                  <p className="text-muted-foreground pl-4">
                    please_dm_me_on_linkedin();
                  </p>
                  <p className="text-muted-foreground">{"}"}</p>

                  <a
                    href="https://linkedin.com/in/farookhridoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group mt-4"
                  >
                    <Linkedin className="w-5 h-5 text-terminal-cyan group-hover:text-primary" />
                    <span>linkedin.com/in/farookhridoy</span>
                  </a>
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

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
