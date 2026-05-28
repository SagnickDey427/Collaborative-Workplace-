/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Header({ username = "John" }) {
  // Get today's date formatted beautifully (e.g., "Friday, April 3, 2026")
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
    >
      {/* Header Info */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Welcome back, {username}! 👋
        </h1>
        <p className="text-slate-500 font-medium">{today}</p>
      </div>

      {/* Action Buttons Container */}
      <div className="flex flex-wrap items-center gap-4">
        {/* New Document Button */}

        <button className="flex items-center gap-3 px-5 py-3 bg-white/70 hover:bg-white text-slate-800 rounded-2xl font-semibold shadow-sm border border-white/50 transition-all hover:shadow-md hover:-translate-y-0.5 group">
          <i className="fa-solid fa-file-circle-plus text-cyan-500 text-lg group-hover:scale-110 transition-transform"></i>
          New Document
        </button>

        {/* New Folder Button */}
        <button className="flex items-center gap-3 px-5 py-3 bg-white/70 hover:bg-white text-slate-800 rounded-2xl font-semibold shadow-sm border border-white/50 transition-all hover:shadow-md hover:-translate-y-0.5 group">
          <i className="fa-solid fa-folder-plus text-purple-400 text-lg group-hover:scale-110 transition-transform"></i>
          New Folder
        </button>

        {/* Invite Team Button */}
        <button className="flex items-center gap-3 px-5 py-3 bg-white/70 hover:bg-white text-slate-800 rounded-2xl font-semibold shadow-sm border border-white/50 transition-all hover:shadow-md hover:-translate-y-0.5 group">
          <i className="fa-solid fa-user-plus text-slate-500 text-lg group-hover:scale-110 transition-transform"></i>
          Invite Team
        </button>
      </div>
    </motion.div>
  );
}
