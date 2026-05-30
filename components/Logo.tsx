"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Asees Passport & Visa Services – Home"
    >
      {/* Icon mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.08, rotate: 6 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex-shrink-0"
        style={{ transformOrigin: "center" }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main cyan→blue→violet gradient */}
            <linearGradient
              id="lm-grad"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="55%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            {/* Arc gradient (cyan→blue horizontal) */}
            <linearGradient
              id="lm-arc"
              x1="7"
              y1="20"
              x2="33"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            {/* Soft background radial glow */}
            <radialGradient id="lm-bg" cx="50%" cy="38%" r="58%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
            </radialGradient>
          </defs>

          {/* Ambient glow disc */}
          <circle cx="20" cy="20" r="20" fill="url(#lm-bg)" />

          {/* Globe outer ring – draws in on mount */}
          <motion.circle
            cx="20"
            cy="20"
            r="17"
            stroke="url(#lm-grad)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />

          {/* Equator – front (visible arc) */}
          <motion.path
            d="M 3.5 20 Q 20 26.5 36.5 20"
            stroke="url(#lm-grad)"
            strokeWidth="1.1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeInOut" }}
          />

          {/* Equator – back (dashed) */}
          <motion.path
            d="M 3.5 20 Q 20 13.5 36.5 20"
            stroke="url(#lm-grad)"
            strokeWidth="1"
            strokeDasharray="3 2.5"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          />

          {/* Left meridian */}
          <motion.path
            d="M 20 3 Q 12 20 20 37"
            stroke="url(#lm-grad)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeInOut" }}
          />

          {/* Right meridian */}
          <motion.path
            d="M 20 3 Q 28 20 20 37"
            stroke="url(#lm-grad)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Flight arc – the hero element */}
          <motion.path
            d="M 7 27 C 9 9 29 9 33 13"
            stroke="url(#lm-arc)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* Origin dot (departure) */}
          <motion.circle
            cx="7"
            cy="27"
            r="3.2"
            fill="#22d3ee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
          <motion.circle
            cx="7"
            cy="27"
            r="1.5"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />

          {/* Destination dot (arrival) – appears after arc finishes */}
          <motion.circle
            cx="33"
            cy="13"
            r="3.5"
            fill="#60a5fa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 1.3 }}
          />
          <motion.circle
            cx="33"
            cy="13"
            r="1.6"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.3, delay: 1.38 }}
          />

          {/* Subtle destination pulse ring */}
          <motion.circle
            cx="33"
            cy="13"
            r="3.5"
            stroke="#60a5fa"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 2, 2.5] }}
            transition={{
              duration: 1.2,
              delay: 1.4,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "33px 13px" }}
          />
        </svg>
      </motion.div>

      {/* Wordmark */}
      <motion.div
        className="leading-tight select-none"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
      >
        <p className="font-black text-white text-[15px] tracking-[0.14em]">
          ASEES
        </p>
        <p className="text-[8.5px] text-cyan-400 font-semibold tracking-[0.22em] uppercase leading-relaxed">
          Passport &amp; Visa Services
        </p>
      </motion.div>
    </Link>
  );
}
