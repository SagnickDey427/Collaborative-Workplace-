/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Profile({
  username = "John Doe",
  email = "sampleEmail@dom.go",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" bg-white/40 backdrop-blur-2xl border-white/60 rounded-2xl pt-7 pb-12 px-4 shadow-sm"
    >
      <div className="flex  flex-col items-center">
        <div className="h-14 w-14 rounded-[50%] bg-amber-300 mb-3">
          <img src="" alt="" />
        </div>
        <p className="font-medium text-2xl">{username}</p>
        <p className="text-gray-700 mb-2">{email}</p>
        <p className="text-teal-400 mb-2">Edit Profile</p>
      </div>
    </motion.div>
  );
}
