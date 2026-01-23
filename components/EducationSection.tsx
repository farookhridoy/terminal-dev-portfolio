"use client"

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const education = [
    {
        degree: "B.Sc. in Engineering",
        institution: "Eastern University Bangladesh",
        period: "Aug 2018 - Aug 2022",
        cgpa: "3.27 out of 4.00",
        type: "Bachelor's Degree"
    },
    {
        degree: "Diploma in Engineering",
        institution: "Feni Polytechnic Institute",
        period: "Jan 2014 - Dec 2017",
        cgpa: "3.49 out of 4.00",
        type: "Diploma"
    },
];

const EducationSection = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                        <span className="text-primary">$</span> cat education.txt
                    </h2>
                    <p className="text-muted-foreground">Academic background and qualifications</p>
                </motion.div>

                <TerminalWindow title="education.txt">
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                <div className="mb-2">
                                    <h3 className="text-lg font-semibold text-terminal-cyan">{edu.degree}</h3>
                                    <p className="text-terminal-yellow font-mono text-sm">{edu.institution}</p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mb-2">
                                    <span className="text-terminal-orange font-mono text-sm">[{edu.period}]</span>
                                    <span className="text-terminal-purple font-mono text-sm">CGPA: {edu.cgpa}</span>
                                </div>

                                <div className="inline-block px-3 py-1 text-xs font-mono bg-secondary rounded text-terminal-green">
                                    {edu.type}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </TerminalWindow>
            </div>
        </section>
    );
};

export default EducationSection;
