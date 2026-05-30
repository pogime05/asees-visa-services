"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function CountUp({
  to,
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const ms = duration * 1000;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / ms, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, to, duration]);

  let formatted: string;
  if (to >= 1000) {
    formatted = `${Math.round(value / 1000)}K`;
  } else if (decimals > 0) {
    formatted = value.toFixed(decimals);
  } else {
    formatted = Math.round(value).toString();
  }

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
