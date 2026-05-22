"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [-20, 18, -20], x: [-10, 10, -10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [18, -20, 18], x: [12, -12, 12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] w-96 h-96 bg-violet-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [-12, 16, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-[40%] w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [10, -14, 10], x: [-8, 8, -8] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[10%] right-[30%] w-48 h-48 bg-indigo-400/6 rounded-full blur-2xl"
      />
    </div>
  );
}
