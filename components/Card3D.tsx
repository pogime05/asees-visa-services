"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const springCfg = { stiffness: 180, damping: 22 };
  const rx = useSpring(rotateX, springCfg);
  const ry = useSpring(rotateY, springCfg);

  const glowOpacity = useMotionValue(0);
  const glowSpring = useSpring(glowOpacity, { stiffness: 200, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    glowOpacity.set(1);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: "1200px",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
