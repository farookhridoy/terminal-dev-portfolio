"use client"

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const LinkedInSection = () => {
    return (
        <section id="linkedin" className="py-20 px-4">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                        <span className="text-primary">$</span> curl linkedin/featured
                    </h2>
                    <p className="text-muted-foreground">
                        Selected posts from <a href="https://www.linkedin.com/in/farookhridoy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@farookhridoy</a>
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TerminalWindow title="featured_post_01.html">
                        <div className="w-full h-full bg-white rounded">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7281906843088560128?collapsed=1"
                                height="600"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                                className="w-full"
                            ></iframe>
                        </div>
                    </TerminalWindow>

                    <TerminalWindow title="featured_post_02.html">
                        <div className="w-full h-full bg-white rounded">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7122785517661782016?collapsed=1"
                                height="229"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                                className="w-full"
                            ></iframe>
                        </div>
                    </TerminalWindow>

                    <TerminalWindow title="featured_post_03.html">
                        <div className="w-full h-full bg-white rounded">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7099701593217921024?collapsed=1"
                                height="600"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                                className="w-full"
                            ></iframe>
                        </div>
                    </TerminalWindow>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <a
                        href="https://www.linkedin.com/in/farookhridoy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded border border-border transition-colors font-mono"
                    >
                        <span>$ view --all</span>
                        <span className="text-primary">linked.in/farookhridoy</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LinkedInSection;
