"use client";

import { motion, type Variants } from "framer-motion";
import { Smartphone, Cloud, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile & Frontend",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["Supabase", "AWS", "Cloudflare"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Architecture",
    icon: <Server className="w-6 h-6" />,
    skills: ["System Optimization", "Server Cost Reduction", "CI/CD"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
        <div className="w-12 h-1 bg-white/20 rounded-full text-center" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`glass-card relative overflow-hidden rounded-3xl p-8 group border border-white/5 hover:border-white/10 transition-colors`}
          >
            {/* Subtle background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6 text-white/80 group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
