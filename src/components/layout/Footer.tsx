"use client";

import { motion } from "framer-motion";

import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-10 mt-20 border-t border-white/5 flex flex-col items-center justify-center text-white/50 text-sm"
    >
      <p>© {currentYear} {SITE_CONFIG.personal.name}. All Rights Reserved.</p>
      <p className="mt-2 text-xs">Built with Next.js & Framer Motion</p>
    </motion.footer>
  );
}
