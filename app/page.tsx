import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck, Plane, BookOpen, Briefcase, Home, FileCheck,
  Star, Award, Zap, Users, Phone, MapPin, ChevronRight,
  ArrowRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Card3D from "@/components/Card3D";
import FloatingOrbs from "@/components/FloatingOrbs";

const services = [
  { icon: ShieldCheck, title: "Passport Services",        desc: "New applications, renewals, and urgent processing for Canadian passports.",          color: "from-cyan-400 to-cyan-600",    bg: "bg-cyan-950/50",    border: "border-cyan-500/20" },
  { icon: Plane,        title: "Visitor Visas",           desc: "Tourist and family visit visas with expert guidance on documentation.",              color: "from-blue-400 to-blue-600",    bg: "bg-blue-950/50",    border: "border-blue-500/20" },
  { icon: BookOpen,     title: "Study Permits",           desc: "Student visa applications and permit extensions for international students.",         color: "from-violet-400 to-violet-600",bg: "bg-violet-950/50", border: "border-violet-500/20" },
  { icon: Briefcase,    title: "Work Permits",            desc: "Open and employer-specific work permits for skilled workers.",                        color: "from-indigo-400 to-indigo-600",bg: "bg-indigo-950/50", border: "border-indigo-500/20" },
  { icon: Home,         title: "Permanent Residency",     desc: "Express Entry, Provincial Nominee, and family sponsorship applications.",            color: "from-teal-400 to-teal-600",    bg: "bg-teal-950/50",    border: "border-teal-500/20" },
  { icon: FileCheck,    title: "Document Authentication", desc: "Notarization, apostille, and document legalization services.",                       color: "from-sky-400 to-sky-600",      bg: "bg-sky-950/50",     border: "border-sky-500/20" },
];

const reasons = [
  { icon: Star,  title: "5-Star Rated",          desc: "Consistently rated 5 stars by our clients on Google with over 500 reviews.",     color: "from-amber-400 to-yellow-500" },
  { icon: Award, title: "15+ Years Experience",  desc: "Over a decade of proven expertise in Canadian immigration and visa services.",     color: "from-cyan-400 to-cyan-600" },
  { icon: Zap,   title: "Fast Turnaround",        desc: "We process applications quickly without compromising accuracy or quality.",        color: "from-blue-400 to-indigo-500" },
  { icon: Users, title: "Personalized Support",   desc: "One-on-one guidance from start to finish — we're with you every step of the way.", color: "from-violet-400 to-purple-500" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center mesh-bg text-white overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-40" />

        {/* Grid lines decoration */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-3">
              <AnimateIn delay={0}>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-7">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-slate-300">5.0 Google Rating</span>
                  <span className="w-px h-3.5 bg-white/20" />
                  <span className="text-cyan-400 font-semibold">Brampton, Ontario</span>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
                  Your Trusted<br />
                  <span className="gradient-text">Passport &amp; Visa</span><br />
                  Experts
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                  From visitor visas to permanent residency — Asees Passport and Visa Services handles every step of your immigration journey with care, speed, and expertise.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:9056161739"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full glow-cyan-sm hover:glow-cyan transition-all duration-300 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: (905) 616-1739
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    View All Services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Right — floating stats glass card */}
            <div className="lg:col-span-2 hidden lg:block">
              <AnimateIn delay={0.4} direction="right">
                <div className="gradient-border animate-float">
                  <div className="glass-card rounded-2xl p-6 space-y-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">Why Clients Trust Us</p>
                    {[
                      { value: "5.0★", label: "Google Rating", sub: "500+ reviews", color: "text-amber-400" },
                      { value: "10,000+", label: "Clients Served", sub: "Since 2009", color: "text-cyan-400" },
                      { value: "15+", label: "Years in Business", sub: "Brampton's trusted choice", color: "text-violet-400" },
                      { value: "20+", label: "Services Offered", sub: "All immigration needs", color: "text-blue-400" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className={`text-2xl font-black w-20 shrink-0 ${s.color}`}>{s.value}</div>
                        <div>
                          <p className="text-white font-semibold text-sm">{s.label}</p>
                          <p className="text-slate-500 text-xs">{s.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </section>

      {/* ── Services section (Toronto bg) ── */}
      <section className="relative py-24 overflow-hidden bg-[#030712]">
        {/* Toronto skyline background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507992781348-310259076fe0?w=1920&auto=format&fit=crop&q=80"
            alt="Toronto skyline"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/70 to-[#030712]" />
        </div>
        <div className="absolute inset-0 pattern-dots-dark opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                <span className="h-px w-8 bg-cyan-400" /> What We Offer <span className="h-px w-8 bg-cyan-400" />
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                What We Can Do For You
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">
                Comprehensive immigration and documentation services under one roof.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateIn key={s.title} delay={i * 0.08}>
                  <Card3D className="h-full">
                    <div className={`h-full glass-card rounded-2xl p-6 border ${s.border} hover:border-opacity-60 transition-all duration-300 group`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                      <div className="mt-4 flex items-center gap-1 text-cyan-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Card3D>
                </AnimateIn>
              );
            })}
          </div>

          <AnimateIn delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full glow-cyan-sm hover:glow-cyan transition-all duration-300 shadow-lg"
              >
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <AnimateIn>
                <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  <span className="h-px w-8 bg-cyan-400" /> Why Asees
                </span>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Why Thousands<br />
                  <span className="gradient-text">Choose Asees</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  Located in Brampton at 30 Intermodal Drive, we&apos;ve built our reputation on trust, accuracy, and results. Our clients come back — and they bring their families.
                </p>
              </AnimateIn>
              <div className="space-y-4">
                {reasons.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <AnimateIn key={r.title} delay={0.2 + i * 0.08} direction="left">
                      <Card3D>
                        <div className="glass-card rounded-xl p-4 flex items-start gap-4 hover:border-cyan-500/30 transition-colors border border-white/10">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shrink-0 shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm">{r.title}</h4>
                            <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                          </div>
                        </div>
                      </Card3D>
                    </AnimateIn>
                  );
                })}
              </div>
            </div>

            {/* Right — review cards */}
            <div className="space-y-4">
              <AnimateIn delay={0.1} direction="right">
                <p className="text-slate-400 text-sm font-medium mb-6">What our clients say</p>
              </AnimateIn>
              {[
                { name: "Harpreet S.", service: "Permanent Residency", text: "Exceptional service! They handled our entire PR application smoothly. Highly recommend Asees for any immigration needs." },
                { name: "Mandeep K.", service: "Study Permit", text: "Very professional and knowledgeable staff. Got my study permit sorted quickly. Couldn't be happier with the result!" },
                { name: "Raj P.", service: "Visitor Visa", text: "Best visa consultants in Brampton. They guided us through the visitor visa process step by step. Stress-free experience." },
              ].map((r, i) => (
                <AnimateIn key={r.name} delay={0.2 + i * 0.1} direction="right">
                  <Card3D>
                    <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/25 transition-colors group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-cyan-500 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                          {r.service}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                          {r.name[0]}
                        </div>
                        <p className="text-slate-400 text-xs font-medium">{r.name}</p>
                        <span className="text-slate-600 text-xs">· Google Review</span>
                      </div>
                    </div>
                  </Card3D>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 border-y border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5.0★", label: "Google Rating", color: "text-amber-400" },
              { value: "500+", label: "5-Star Reviews", color: "text-cyan-400" },
              { value: "15+",  label: "Years in Business", color: "text-blue-400" },
              { value: "10K+", label: "Clients Served", color: "text-violet-400" },
            ].map((s) => (
              <AnimateIn key={s.label}>
                <p className={`text-3xl md:text-4xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-sm text-slate-400 mt-1">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#030712] py-24 overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-30" />
        {/* Cyan glow center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300">Now accepting new clients</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
              Ready to Start<br />
              <span className="gradient-text">Your Journey?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
              Visit us in Brampton or give us a call. Our experts are ready to help you take the next step.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9056161739"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-9 py-4 rounded-full glow-cyan transition-all duration-300 shadow-xl shadow-cyan-500/20"
              >
                <Phone className="w-4 h-4" />
                Call (905) 616-1739
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 border border-white/10 text-white font-semibold px-9 py-4 rounded-full transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                Visit Brampton Office
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
