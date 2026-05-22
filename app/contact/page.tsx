"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, CheckCircle, Send, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Card3D from "@/components/Card3D";
import FloatingOrbs from "@/components/FloatingOrbs";

const hours = [
  { day: "Monday",    time: "10:00 AM – 7:00 PM" },
  { day: "Tuesday",   time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday",  time: "10:00 AM – 7:00 PM" },
  { day: "Friday",    time: "10:00 AM – 7:00 PM" },
  { day: "Saturday",  time: "10:00 AM – 5:00 PM" },
  { day: "Sunday",    time: "By Appointment" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200";
  const labelClass = "block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide";

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 mesh-bg text-white overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="h-px w-8 bg-cyan-400" /> Get In Touch <span className="h-px w-8 bg-cyan-400" />
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              We&apos;re Here to <span className="gradient-text">Help You</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Walk in, call, or send a message. Our Brampton office is ready to help you today.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="relative bg-slate-950 py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-dark opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info */}
            <div className="space-y-5">
              {/* Address */}
              <AnimateIn direction="left">
                <Card3D>
                  <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/25 transition-colors flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Address</p>
                      <p className="text-white font-semibold">30 Intermodal Dr #3<br />Brampton, ON L6T 5K1</p>
                      <a href="https://maps.google.com/?q=30+Intermodal+Dr+3+Brampton+ON" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 text-xs font-semibold hover:text-cyan-300 mt-2 transition-colors">
                        Get Directions <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </AnimateIn>

              {/* Phone */}
              <AnimateIn direction="left" delay={0.08}>
                <Card3D>
                  <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/25 transition-colors flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-white font-semibold">(905) 616-1739</p>
                      <a href="tel:9056161739" className="inline-flex items-center gap-1 text-cyan-400 text-xs font-semibold hover:text-cyan-300 mt-2 transition-colors">
                        Call Now <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </AnimateIn>

              {/* Hours */}
              <AnimateIn direction="left" delay={0.16}>
                <div className="glass-card rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-sm">
                        <span className="text-slate-400 font-medium">{h.day}</span>
                        <span className={h.time === "By Appointment" ? "text-cyan-400 font-semibold" : "text-slate-300"}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Map */}
              <AnimateIn direction="left" delay={0.22}>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-52 shadow-xl">
                  <iframe
                    title="Asees Passport & Visa Services Location"
                    width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
                    src="https://www.google.com/maps?q=30+Intermodal+Dr+%233,+Brampton,+ON+L6T+5K1&output=embed"
                    allowFullScreen loading="lazy"
                  />
                </div>
              </AnimateIn>
            </div>

            {/* Right: Form */}
            <AnimateIn direction="right">
              <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-500/20 transition-colors">
                <h2 className="text-2xl font-black text-white mb-1">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-7">Fill out the form and we&apos;ll respond within 24 hours.</p>

                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-500/25">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">Thank you for reaching out. We&apos;ll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number *</label>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="(xxx) xxx-xxxx" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass}>Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className={`${inputClass} [&>option]:bg-slate-900 [&>option]:text-white`}>
                        <option value="">Select a service...</option>
                        <option>Passport Application / Renewal</option>
                        <option>Visitor Visa</option>
                        <option>Super Visa</option>
                        <option>Study Permit</option>
                        <option>Work Permit</option>
                        <option>Permanent Residency</option>
                        <option>Document Authentication</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        placeholder="Briefly describe your situation or question..."
                        rows={4} className={`${inputClass} resize-none`} />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-xs bg-red-950/40 border border-red-500/20 rounded-xl px-4 py-3">
                        Something went wrong. Please call us directly at (905) 616-1739.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 glow-cyan-sm hover:glow-cyan flex items-center justify-center gap-2 shadow-lg"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Prefer to talk?{" "}
                      <a href="tel:9056161739" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">(905) 616-1739</a>
                    </p>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
