"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, CheckCircle, Send } from "lucide-react";

const hours = [
  { day: "Monday", time: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday", time: "10:00 AM – 7:00 PM" },
  { day: "Friday", time: "10:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "By Appointment" },
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

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We&apos;re located in Brampton and ready to help. Walk in, call, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left: Info */}
            <div className="space-y-6">
              {/* Address card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">Address</p>
                  <p className="text-slate-800 font-semibold text-sm">30 Intermodal Dr #3<br />Brampton, ON L6T 5K1</p>
                  <a href="https://maps.google.com/?q=30+Intermodal+Dr+3+Brampton+ON" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs font-semibold hover:underline mt-1 block">
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">Phone</p>
                  <p className="text-slate-800 font-semibold text-sm">(905) 616-1739</p>
                  <a href="tel:9056161739" className="text-blue-600 text-xs font-semibold hover:underline mt-1 block">
                    Call Now →
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-slate-50 last:border-0">
                      <span className="text-slate-600 font-medium">{h.day}</span>
                      <span className={h.time === "By Appointment" ? "text-orange-500 font-semibold" : "text-slate-700"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-56">
                <iframe
                  title="Asees Passport & Visa Services Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps?q=30+Intermodal+Dr+%233,+Brampton,+ON+L6T+5K1&output=embed"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {status === "success" ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Service Needed</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
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
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Briefly describe your situation or question..."
                      rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                      Something went wrong. Please call us directly at (905) 616-1739.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
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
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Prefer to talk? Call us at{" "}
                    <a href="tel:9056161739" className="text-blue-500 hover:underline font-medium">(905) 616-1739</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
