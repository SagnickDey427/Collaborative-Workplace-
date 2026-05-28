/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function EditorMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="w-full max-w-5xl mt-20 px-4 md:px-0"
    >
      <div className="relative w-full h-auto md:aspect-[16/9] bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left">
        {/* Mockup Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/30 bg-white/20">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <div className="ml-4 text-xs font-medium text-slate-500 flex-1">
            Project_Proposal.doc
          </div>

          {/* Fake Collaborator Avatars */}
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white/50 z-20"></div>
            <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white/50 z-10"></div>
          </div>
        </div>

        {/* Mockup Editor Content */}
        <div className="p-6 md:p-12 flex-1 relative h-auto md:h-full">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Project Alpha Launch
          </h2>
          <div className="text-slate-600 leading-relaxed mb-4">
            We need to finalize the architecture before Q3. The main priority is
            ensuring that the{" "}
            <span className="relative inline-block ml-1">
              real-time websocket connections
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                // Added 0.5s delay so they don't pulse perfectly together
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }}
                className="absolute -right-1 top-0 bottom-0 w-0.5 bg-indigo-500"
              ></motion.div>
              <div className="absolute -top-6 -right-12 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm rounded-bl-none">
                David
              </div>
            </span>{" "}
            are stable.
          </div>
          <div className="text-slate-600 leading-relaxed">
            I've reviewed the latest database schemas and I think we should
            switch to
            <span className="relative inline-block ml-1">
              a document-based approach.
              {/* Fake Live Cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="absolute -right-1 top-0 bottom-0 w-0.5 bg-teal-500"
              ></motion.div>
              <div className="absolute -top-6 -right-12 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm rounded-bl-none">
                Sarah
              </div>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
