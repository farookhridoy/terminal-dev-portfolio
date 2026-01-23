import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
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
    <section id="contact" className="py-20 px-4 bg-card/30" aria-labelledby="contact-heading">
      <div className="container max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary" aria-hidden="true">$</span> ./send_message.sh
          </h2>
          <p className="text-muted-foreground">Let's build something amazing together</p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8">
          <article aria-labelledby="contact-info-heading">
            <TerminalWindow title="contact_info.json">
              <div className="space-y-6">
                <h3 id="contact-info-heading" className="text-terminal-purple mb-4">{"// Get in touch"}</h3>
                
                <address className="space-y-4 not-italic">
                  <a
                    href="mailto:hello@developer.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    aria-label="Send email to hello@developer.com"
                  >
                    <Mail className="w-5 h-5 text-terminal-cyan group-hover:text-primary" aria-hidden="true" />
                    <span>hello@developer.com</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-terminal-yellow" aria-hidden="true" />
                    <span>Available Worldwide (Remote)</span>
                  </div>
                </address>

                <nav className="pt-6 border-t border-border" aria-labelledby="social-links-heading">
                  <h4 id="social-links-heading" className="text-terminal-purple mb-4">{"// Social links"}</h4>
                  <ul className="flex gap-4 list-none">
                    <li>
                      <a
                        href="#"
                        className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all inline-block"
                        aria-label="Visit GitHub profile"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all inline-block"
                        aria-label="Visit LinkedIn profile"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all inline-block"
                        aria-label="Visit Twitter profile"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Twitter className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </TerminalWindow>
          </article>

          <article aria-labelledby="contact-form-heading">
            <TerminalWindow title="new_message.sh">
              <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="contact-form-heading">
                <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
                
                <div>
                  <label htmlFor="contact-name" className="text-terminal-cyan text-sm mb-2 block">
                    <span className="text-muted-foreground">const</span> name <span className="text-muted-foreground">=</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder='"Your Name"'
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-terminal-cyan text-sm mb-2 block">
                    <span className="text-muted-foreground">const</span> email <span className="text-muted-foreground">=</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder='"you@email.com"'
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-terminal-cyan text-sm mb-2 block">
                    <span className="text-muted-foreground">const</span> message <span className="text-muted-foreground">=</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-secondary border border-border rounded px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder='"Your message here..."'
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  ./submit.sh
                </button>
              </form>
            </TerminalWindow>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
