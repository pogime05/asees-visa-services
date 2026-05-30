"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Harpreet S.",
    service: "Permanent Residency",
    text: "Exceptional service! They handled our entire PR application smoothly. Highly recommend Asees for any immigration needs.",
    avatar: "H",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Mandeep K.",
    service: "Study Permit",
    text: "Very professional and knowledgeable staff. Got my study permit sorted quickly. Couldn't be happier with the result!",
    avatar: "M",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Raj P.",
    service: "Visitor Visa",
    text: "Best visa consultants in Brampton. They guided us through the visitor visa process step by step. Stress-free experience.",
    avatar: "R",
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Simran D.",
    service: "Work Permit",
    text: "Incredibly helpful team. They took care of every detail for my work permit application. Would absolutely recommend!",
    avatar: "S",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Gurpreet B.",
    service: "Passport Renewal",
    text: "Fast and efficient passport renewal service. Had my passport renewed within days. Amazing, hassle-free service!",
    avatar: "G",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Amrit T.",
    service: "Family Sponsorship",
    text: "They helped our entire family through the sponsorship process. So patient, thorough, and professional throughout!",
    avatar: "A",
    color: "from-pink-500 to-rose-600",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card rounded-2xl p-5 border border-white/10 w-72 shrink-0 mx-2.5 hover:border-cyan-500/25 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="text-[10px] text-cyan-500 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20 shrink-0 ml-2">
          {t.service}
        </span>
      </div>
      <p className="text-slate-300 text-sm italic leading-relaxed">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-2 mt-4">
        <div
          className={`w-7 h-7 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
        >
          {t.avatar}
        </div>
        <p className="text-slate-400 text-xs font-medium">{t.name}</p>
        <span className="text-slate-600 text-xs">· Google Review</span>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex w-max"
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </motion.div>
    </div>
  );
}
