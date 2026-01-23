"use client"

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Book } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const pinnedRepos = [
    {
        name: "terminal-dev-portfolio",
        description: "A developer portfolio website with a terminal-themed interface, built with Next.js and Tailwind CSS.",
        language: "TypeScript",
        stars: 5,
        forks: 2,
        url: "https://github.com/farookhridoy/terminal-dev-portfolio"
    },
    {
        name: "laravel-erp-module",
        description: "Enterprise Resource Planning module for managing procurement and accounts.",
        language: "PHP",
        stars: 12,
        forks: 4,
        url: "https://github.com/farookhridoy"
    },
    {
        name: "school-management-system",
        description: "Comprehensive system for managing student records, attendance, and grading.",
        language: "PHP",
        stars: 8,
        forks: 3,
        url: "https://github.com/farookhridoy"
    }
];

const GithubStatsSection = () => {
    return (
        <section id="github-stats" className="py-20 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                        <span className="text-primary">$</span> neofetch --github
                    </h2>
                    <p className="text-muted-foreground">Open source contributions and activity</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* GitHub Stats */}
                    <TerminalWindow title="github_stats.sh">
                        <div className="flex justify-center items-center h-full">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=farookhridoy&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
                                alt="GitHub Stats"
                                className="w-full max-w-md"
                            />
                        </div>
                    </TerminalWindow>

                    {/* Top Languages */}
                    <TerminalWindow title="top_languages.json">
                        <div className="flex justify-center items-center h-full">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=farookhridoy&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
                                alt="Top Languages"
                                className="w-full max-w-md"
                            />
                        </div>
                    </TerminalWindow>
                </div>

                {/* Streak Stats */}
                <div className="mb-12">
                    <TerminalWindow title="commit_streak.log">
                        <div className="flex justify-center items-center py-4">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=farookhridoy&theme=github_dark&hide_border=false"
                                alt="GitHub Streak"
                                className="w-full max-w-2xl"
                            />
                        </div>
                    </TerminalWindow>
                </div>

                {/* Pinned Repos */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-primary font-mono text-xl">$</span>
                        <h3 className="text-2xl font-bold font-mono">ls -la ./public-repos</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pinnedRepos.map((repo, index) => (
                            <motion.a
                                key={repo.name}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group block p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all h-full"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 text-terminal-cyan">
                                        <Book className="w-5 h-5" />
                                        <span className="font-mono font-bold">{repo.name}</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">
                                    {repo.description}
                                </p>

                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="flex items-center gap-1 text-terminal-yellow">
                                        <div className="w-2 h-2 rounded-full bg-terminal-yellow" />
                                        {repo.language}
                                    </span>

                                    <div className="flex gap-4 text-muted-foreground">
                                        <span className="flex items-center gap-1 hover:text-foreground">
                                            <Star className="w-3 h-3" />
                                            {repo.stars}
                                        </span>
                                        <span className="flex items-center gap-1 hover:text-foreground">
                                            <GitFork className="w-3 h-3" />
                                            {repo.forks}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="https://github.com/farookhridoy?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-mono"
                        >
                            <span className="text-muted-foreground">view_all_repos</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStatsSection;
