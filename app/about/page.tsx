import Link from "next/link";
import {
  Target, Lock, Lightbulb, Heart, ShieldCheck, FileText,
  HeadphonesIcon, Globe, CheckCircle, Phone, ArrowRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Card3D from "@/components/Card3D";
import FloatingOrbs from "@/components/FloatingOrbs";

const values = [
  { Icon: Target,       title: "Accuracy First",       desc: "Every application is reviewed thoroughly to ensure all information is correct and complete before submission.", gradient: "from-cyan-400 to-cyan-600" },
  { Icon: Lock,         title: "Confidentiality",       desc: "Your personal documents and information are handled with the highest level of privacy and discretion.", gradient: "from-blue-400 to-blue-600" },
  { Icon: Lightbulb,    title: "Transparent Advice",    desc: "We provide honest assessments — no false promises, just clear and straightforward guidance.", gradient: "from-violet-400 to-violet-600" },
  { Icon: Heart,        title: "Community Focused",     desc: "Proudly serving the diverse Brampton community, including South Asian, Caribbean, and Filipino newcomers.", gradient: "from-teal-400 to-emerald-600" },
];

const team = [
  { Icon: ShieldCheck,    name: "Immigration Consultants", role: "CICC Authorized", desc: "Our consultants are authorized by the College of Immigration and Citizenship Consultants (CICC) with years of hands-on experience.", gradient: "from-cyan-400 to-blue-600" },
  { Icon: FileText,       name: "Document Specialists",    role: "Notarization & Authentication", desc: "Trained professionals who ensure your documents meet all legal and government requirements.", gradient: "from-violet-400 to-purple-600" },
  { Icon: HeadphonesIcon, name: "Client Support Staff",    role: "Bilingual Customer Service", desc: "Friendly, multilingual staff available in English, Punjabi, Hindi, and more.", gradient: "from-teal-400 to-emerald-600" },
];

const regions = ["India & South Asia", "Philippines & Southeast Asia", "Caribbean & Africa", "Middle East & Europe", "Latin America"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 mesh-bg text-white overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="h-px w-8 bg-cyan-400" /> About Us <span className="h-px w-8 bg-cyan-400" />
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Built on Trust,<br />
              <span className="gradient-text">Driven by Results</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A Brampton institution committed to helping people navigate their immigration journey with expertise and care.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Our story */}
      <section className="relative bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <div className="inline-flex items-center gap-2 glass-card border border-cyan-500/20 px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">Our Story</span>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                  Helping Families Build<br />
                  <span className="gradient-text">Their Canadian Future</span>
                </h2>
              </AnimateIn>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                {[
                  "Asees Passport and Visa Services Inc. was founded with a single mission: to make the complex world of immigration accessible and stress-free for families and individuals across the Greater Toronto Area.",
                  "Located at 30 Intermodal Drive in Brampton — one of Canada's most diverse cities — we've grown from a small passport agency into a full-service immigration consultancy trusted by thousands of clients.",
                  "Over the years, we've helped newcomers, students, skilled workers, and families achieve their Canadian dreams. We take pride in every file we touch and every life we help change.",
                ].map((text, i) => (
                  <AnimateIn key={i} delay={0.15 + i * 0.08}>
                    <p>{text}</p>
                  </AnimateIn>
                ))}
              </div>
              <AnimateIn delay={0.4}>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { value: "15+", label: "Years Serving", color: "from-cyan-400 to-cyan-600" },
                    { value: "10K+", label: "Clients Helped", color: "from-blue-400 to-blue-600" },
                    { value: "5.0★", label: "Google Rating", color: "from-amber-400 to-yellow-500" },
                  ].map((s) => (
                    <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-4 text-white text-center shadow-lg`}>
                      <p className="text-2xl font-black">{s.value}</p>
                      <p className="text-xs text-white/70 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Visual card */}
            <AnimateIn delay={0.2} direction="right">
              <Card3D>
                <div className="gradient-border">
                  <div className="glass-card rounded-2xl p-8 border border-white/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Serving All Nationalities</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      We work with clients from over 50 countries, helping them navigate Canadian immigration law with confidence.
                    </p>
                    <ul className="space-y-3">
                      {regions.map((r) => (
                        <li key={r} className="flex items-center gap-3 glass-card rounded-xl px-4 py-2.5 border border-white/5">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-slate-300 text-sm font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-[#030712] py-24 overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                <span className="h-px w-8 bg-cyan-400" /> Our Values <span className="h-px w-8 bg-cyan-400" />
              </span>
              <h2 className="text-4xl font-black text-white mb-3">
                The Principles That Guide Us
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">Everything we do is rooted in these core values.</p>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const VIcon = v.Icon;
              return (
                <AnimateIn key={v.title} delay={i * 0.1}>
                  <Card3D className="h-full">
                    <div className="h-full glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/25 transition-colors text-center group">
                      <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <VIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{v.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </Card3D>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                <span className="h-px w-8 bg-cyan-400" /> Our Team <span className="h-px w-8 bg-cyan-400" />
              </span>
              <h2 className="text-4xl font-black text-white mb-3">Experienced Professionals</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Dedicated to your success every step of the way.</p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => {
              const MIcon = m.Icon;
              return (
                <AnimateIn key={m.name} delay={i * 0.1}>
                  <Card3D className="h-full">
                    <div className="h-full glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-500/25 transition-colors group">
                      <div className={`w-14 h-14 bg-gradient-to-br ${m.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <MIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white text-lg">{m.name}</h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">{m.role}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </Card3D>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#030712] py-20 overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-slate-400 mb-8 text-lg">Come meet our team or give us a call to get started.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9056161739"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full glow-cyan-sm hover:glow-cyan transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Call (905) 616-1739
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
