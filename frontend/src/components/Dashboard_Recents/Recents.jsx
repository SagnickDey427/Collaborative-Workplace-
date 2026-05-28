/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../../init/init_animation";
import { recentDocuments } from "../../../init/init_data";
import { Link } from "react-router-dom";

export default function Recents() {
  return (
    <motion.div>
      <div className="w-full h-96 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex-col items-center justify-center text-slate-500 font-medium shadow-sm">
        <h2 className="font-bold text-xl text-slate-900 mb-6 tracking-tight">
          Recent Documents
        </h2>
        {/* List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-1"
        >
          {recentDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              variants={itemVariants}
              // Notice the -mx-3 and px-3 trick here!
              className="group  px-3 py-3.5 -mx-3 rounded-2xl hover:bg-white/60 cursor-pointer transition-colors"
            >
              <Link to={`/documents/${doc.id}`} className="flex items-center justify-between">
                {/* Left Side : Document icon and title */}
                <div className="flex items-center gap-4">
                  <i className="fa-regular fa-file-lines text-slate-400 group-hover:text-cyan-500 transition-colors text-lg"></i>
                  <span className="font-semibold text-slate-800">
                    {doc.title}
                  </span>
                </div>

                {/* Right Side: Timestamp & Avatars (Hidden on very small mobile screens) */}
                <div className="hidden sm:flex items-center gap-6">
                  {/* Timestamp */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <i className="fa-regular fa-clock text-xs"></i>
                    {doc.timeAgo}
                  </div>

                  {/* Stacked Avatars */}
                  <div className="flex -space-x-2">
                    {doc.avatars.map((name, i) => (
                      <img
                        key={i}
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${name}&backgroundColor=e2e8f0`}
                        alt={name}
                        className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm z-10"
                        // Inline style to fix z-index stacking order so the first avatar is on top
                        style={{ zIndex: doc.avatars.length - i }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
