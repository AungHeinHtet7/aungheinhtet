"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative z-10 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <div className="w-12 h-1 bg-white/20 rounded-full text-center" />
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">Contact Info</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href={`mailto:${SITE_CONFIG.personal.email}`} className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
              <div className="p-3 glass rounded-full group-hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>{SITE_CONFIG.personal.email}</span>
            </a>
            <a href={`tel:${SITE_CONFIG.personal.phone}`} className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
              <div className="p-3 glass rounded-full group-hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span>{SITE_CONFIG.personal.phone}</span>
            </a>
            <div className="flex items-center gap-4 text-white/70 cursor-default">
              <div className="p-3 glass rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <span>{SITE_CONFIG.personal.location}</span>
            </div>
            <a href={SITE_CONFIG.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
              <div className="p-3 glass rounded-full group-hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </div>
              <span>LinkedIn Profile</span>
            </a>
            <a href={SITE_CONFIG.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
              <div className="p-3 glass rounded-full group-hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span>GitHub Profile</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col group">
            <label htmlFor="name" className="text-sm font-medium text-white/60 mb-2 group-focus-within:text-white/90 transition-colors">Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300"
            />
          </div>
          
          <div className="flex flex-col group">
            <label htmlFor="email" className="text-sm font-medium text-white/60 mb-2 group-focus-within:text-white/90 transition-colors">Email</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col group">
            <label htmlFor="message" className="text-sm font-medium text-white/60 mb-2 group-focus-within:text-white/90 transition-colors">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Hello Aung Hein Htet..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300 resize-none"
            />
          </div>

          <button className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
