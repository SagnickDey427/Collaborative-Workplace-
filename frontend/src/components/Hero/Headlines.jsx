/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Headlines() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl px-6"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
        Writing. Collaborating. <br />
        <span className="text-cyan-500">Clearer.</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        The minimalist workspace designed for speed. Real-time collaboration, infinite nesting, and zero distractions. Your ideas, organized instantly.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all">
          Start Writing for Free
        </button>
        <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 hover:text-white bg-white/40 backdrop-blur-md border border-teal-500 rounded-full hover:bg-teal-500 transition-all">
          View Live Demo
        </button>
      </div>
    </motion.div>
  );
}
