"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Urban Cafe",
    description: "Gallery Cafe in Meikhtila — browse menu, earn loyalty points, and access offline-first ordering.",
    tags: ["Flutter", "Supabase", "QR Rewards", "Offline-First"],
    gradient: "from-[#FFB75E] to-[#ED8F03]",
    liveUrl: SITE_CONFIG.projects.urbanCafe,
    image: "/images/projects/urbancafe.png",
  },
  {
    title: "Neo Shopping",
    description: "A feature-rich e-commerce app to revolutionize shopping. Discover, compare, and purchase a vast array of products across diverse categories with ease.",
    tags: ["Flutter", "Riverpod", "Performance"],
    gradient: "from-[#8E2DE2] to-[#4A00E0]",
    liveUrl: SITE_CONFIG.projects.neoShopping,
    image: "/images/projects/neoshopping.png",
  },
  {
    title: "SD Lite 3.0",
    description: "An ERP extension for sales and distribution. Manage routes, handle offline/online orders, invoicing, and complex inventory operations.",
    tags: ["Flutter", "ERP Integration", "Enterprise"],
    gradient: "from-[#11998E] to-[#38EF7D]",
    liveUrl: SITE_CONFIG.projects.sdLite,
    image: "/images/projects/sdlite3.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">Featured Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative glass-card overflow-hidden rounded-3xl border border-white/5 hover:border-white/20 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]"
          >
            <div className="relative w-full h-56 overflow-hidden bg-black/40">
              {project.image ? (
                <>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700`} />
                </>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-2xl tracking-widest uppercase mix-blend-overlay">Preview</span>
                  </div>
                </>
              )}
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-white/40">
                  <a href={SITE_CONFIG.personal.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Github repo">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-white/60 mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
