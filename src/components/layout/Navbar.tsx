"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setActive(targetId);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 sm:mt-6 px-4"
    >
      <nav className="glass rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-6 justify-center w-[95%] sm:w-auto max-w-full overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = active === item.name.toLowerCase();
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
