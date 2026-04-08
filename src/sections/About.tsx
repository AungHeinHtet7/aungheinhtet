"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative z-10 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="w-12 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <Briefcase className="w-6 h-6 text-white/80" />
            </div>
            <h3 className="text-xl font-semibold">Professional Profile</h3>
          </div>
          <p className="text-white/70 leading-relaxed space-y-4">
            <span className="block mb-4">
              I am a results-driven professional specializing in <strong className="text-white/90">scalable systems</strong>, <strong className="text-white/90">performance optimization</strong>, and <strong className="text-white/90">cost reduction</strong> strategies. 
            </span>
            <span className="block">
              As a Flutter Team Lead, I guide teams toward building robust, maintainable architecture while ensuring excellent user experiences and high availability across mobile and web platforms.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <GraduationCap className="w-6 h-6 text-white/80" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/40 before:rounded-full after:absolute after:left-[3px] after:top-4 after:bottom-[-20px] after:w-px after:bg-white/10 last:after:hidden">
              <h4 className="text-lg font-medium text-white/90 mb-1">Bachelor of Engineering</h4>
              <p className="text-white/60 mb-2">Information Science and Technology</p>
              <p className="text-sm text-white/50">University of Technology (Yadanarpon Cyber City)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
