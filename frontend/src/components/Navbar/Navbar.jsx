/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full flex justify-center">
      <div className="navbar-container w-4/5 py-4 px-[2vw] rounded-4xl relative">
        <div className="navbar-left flex items-center gap-4">
          <button
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* Simple animated hamburger lines using Tailwind */}
            <div
              className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>
          <NavLink to="/" className="flex gap-5">
            <div className="bg-teal-400 text-white font-bold w-8 h-8 flex items-center justify-center rounded-lg">
              D.
            </div>
            <p className="font-bold text-xl text-slate-900">DocHub</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="font-medium">
            <li className="hover:text-teal-400 cursor-pointer transition-colors">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="hover:text-teal-400 cursor-pointer transition-colors">
              <NavLink to="/documents">Documents</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-right hidden md:flex items-center gap-3">
          <button className="font-medium text-slate-600 hover:text-teal-400 transition-colors">
            Login
          </button>
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-teal-400 shadow-md transition-all">
            Register
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              // 2. Define the starting state (invisible, pushed up)
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              // 3. Define the fully open state
              animate={{ opacity: 1, y: 0, scale: 1 }}
              // 4. Define the exit state (shrinks and fades out before React deletes it)
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              // 5. Control the speed and feel (springs look amazing for glass UI)
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-[120%] left-0 w-full bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-6 flex flex-col gap-6 md:hidden origin-top"
            >
              <ul className="flex flex-col gap-4 font-medium text-slate-800 text-lg">
                <li className="cursor-pointer border-b border-slate-200/50 pb-2">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="cursor-pointer border-b border-slate-200/50 pb-2">
                  <NavLink to="/documents">Documents</NavLink>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl font-medium text-slate-700 bg-white/50 hover:bg-white transition-colors">
                  Login
                </button>
                <button className="w-full py-3 rounded-xl font-medium text-white bg-teal-400 shadow-md">
                  Register
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
