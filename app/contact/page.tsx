"use client";

import { useState } from "react";

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
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We&apos;re located in Brampton and ready to help. Walk in, call, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              {/* Info cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "30 Intermodal Dr #3\nBrampton, ON L6T 5K1",
                    href: "https://maps.google.com/?q=30+Intermodal+Dr+3+Brampton+ON",
                    action: "Get Directions",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "(905) 616-1739",
                    href: "tel:9056161739",
                    action: "Call Now",
                  },
                ].map((c) => (
                  <div key={c.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{c.label}</p>
                    <p className="text-slate-800 font-semibold text-sm whitespace-pre-line mb-3">{c.value}</p>
                    <a href={c.href} className="text-blue-600 text-xs font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.action} →
                    </a>
                  </div>
                ))}
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🕐</span> Business Hours
                </h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-slate-600 font-medium">{h.day}</span>
                      <span className={h.time === "By Appointment" ? "text-orange-500 font-medium" : "text-slate-700"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64">
                <iframe
                  title="Asees Passport & Visa Services Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=30+Intermodal+Dr+%233+Brampton+ON+L6T+5K1"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
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
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your situation or question..."
                      rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-sm"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Prefer to talk? Call us directly at{" "}
                    <a href="tel:9056161739" className="text-blue-500 hover:underline">
                      (905) 616-1739
                    </a>
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
