"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  className?: string;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },   visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },           visible: { opacity: 1 } },
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
