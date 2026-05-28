/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// 1. Fixed Mock Data (Unique IDs)
const pinnedDocs = [
  {
    id: 1,
    title: "Company Wiki",
    description: "Central hub for all company-wide documentation, policies, and onboarding...",
  },
  {
    id: 2, // Changed to 2
    title: "API Reference v3",
    description: "Complete endpoint reference for the Workspace public API with examples...",
  },
  {
    id: 3,
    title: "OKRs — Q1 2026",
    description: "Company objectives and key results tracking for the current quarter.",
  }
];

// 2. Fixed Animation Logic (Added Container Variants)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Delays each card slightly
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 }, // Sliding up instead of from the left looks cleaner here
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Pinned() {
  return (
    // 3. The Main Bento Box Container (Matches Recents & Welcome Cards)
    <div className="h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col overflow-y-auto">
      
      {/* Header with Font Awesome Icon */}
      <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-6 tracking-tight">
        <i className="fa-solid fa-thumbtack text-cyan-500"></i>
        Pinned
      </h2>

      {/* 4. The List Container (Wired up to containerVariants) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {pinnedDocs.map((doc) => (
          <motion.div 
            key={doc.id} // Added the required 'key' prop
            variants={itemVariants} 
            // 5. The Glassy Card Style (Replaces Pinned.css)
            className="group p-5 bg-white/60 hover:bg-white border border-white/50 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <h3 className="font-bold text-slate-800 mb-1 group-hover:text-cyan-600 transition-colors">
              {doc.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
              {doc.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}