/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';


const featuresData = [
  {
    title: "Live Synchronization",
    description: "Powered by WebSockets. Watch your team's cursors fly across the screen in real-time with zero lag.",
    icon: "⚡" // Using emojis as lightweight placeholders for SVGs
  },
  {
    title: "Absolute Focus",
    description: "A distraction-free, glassmorphic interface that gets out of your way so your ideas can take center stage.",
    icon: "✨"
  },
  {
    title: "Smart Organization",
    description: "Infinite nesting, quick-pinning, and lightning-fast search. Never lose a document in the void again.",
    icon: "🗂️"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

// Animation variants for the staggering effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Delay each card by 0.2s
  }
};


export default function Features_grid() {
  return (
    <motion.div 
          variants={containerVariants}
          initial="hidden"
          // This is the magic trigger: it plays the animation when it enters the viewport
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-lg hover:bg-white/50 transition-colors"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white/60 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-white/50 mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
  )
}
