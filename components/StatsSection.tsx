import { motion } from "framer-motion";
import { Code, Users, FolderGit2, Award } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "8+",
    label: "Years Experience",
    color: "text-terminal-green",
  },
  {
    icon: FolderGit2,
    value: "100+",
    label: "Projects Delivered",
    color: "text-terminal-cyan",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    color: "text-terminal-yellow",
  },
  {
    icon: Award,
    value: "15+",
    label: "Team Members Led",
    color: "text-terminal-purple",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all group"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-4xl md:text-5xl font-bold font-mono ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
