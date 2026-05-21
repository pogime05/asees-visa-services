import Link from "next/link";
import {
  ShieldCheck,
  Plane,
  BookOpen,
  Briefcase,
  Home,
  FileCheck,
  Star,
  Award,
  Zap,
  Users,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "Passport Services", desc: "New applications, renewals, and urgent processing for Canadian passports.", color: "text-blue-600 bg-blue-100" },
  { icon: Plane, title: "Visitor Visas", desc: "Tourist and family visit visas with expert guidance on documentation.", color: "text-indigo-600 bg-indigo-100" },
  { icon: BookOpen, title: "Study Permits", desc: "Student visa applications and permit extensions for international students.", color: "text-violet-600 bg-violet-100" },
  { icon: Briefcase, title: "Work Permits", desc: "Open and employer-specific work permits for skilled workers.", color: "text-purple-600 bg-purple-100" },
  { icon: Home, title: "Permanent Residency", desc: "Express Entry, Provincial Nominee, and family sponsorship applications.", color: "text-emerald-600 bg-emerald-100" },
  { icon: FileCheck, title: "Document Authentication", desc: "Notarization, apostille, and document legalization services.", color: "text-orange-600 bg-orange-100" },
];

const reasons = [
  { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars by our clients on Google with over 500 reviews.", color: "bg-amber-500" },
  { icon: Award, title: "15+ Years Experience", desc: "Over a decade of proven expertise in Canadian immigration and visa services.", color: "bg-blue-600" },
  { icon: Zap, title: "Fast Turnaround", desc: "We process applications quickly without compromising accuracy or quality.", color: "bg-indigo-600" },
  { icon: Users, title: "Personalized Support", desc: "One-on-one guidance from start to finish — we're with you every step.", color: "bg-violet-600" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              5.0 Google Rating · Brampton, Ontario
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Passport &amp; Visa
              </span>{" "}
              Experts
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              From visitor visas to permanent residency — Asees Passport and Visa Services handles every step of your immigration journey with care and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9056161739"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now: (905) 616-1739
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full backdrop-blur transition-all"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0★", label: "Google Rating" },
              { value: "500+", label: "5-Star Reviews" },
              { value: "15+", label: "Years in Business" },
              { value: "10,000+", label: "Clients Served" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm text-blue-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services overview ── */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              What We Can Do For You
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Comprehensive immigration and documentation services under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 transition-all group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-light" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Why Thousands Choose Asees
              </h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Located in the heart of Brampton at 30 Intermodal Drive, we&apos;ve built our reputation on trust, accuracy, and results. Our clients come back — and they bring their families.
              </p>
              <div className="space-y-5">
                {reasons.map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.title} className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl ${r.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{r.title}</h4>
                        <p className="text-blue-300 text-sm mt-0.5">{r.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Review cards */}
            <div className="space-y-4">
              {[
                { name: "Harpreet S.", text: "Exceptional service! They handled our entire PR application smoothly. Highly recommend Asees for any immigration needs." },
                { name: "Mandeep K.", text: "Very professional and knowledgeable staff. Got my study permit sorted quickly. Couldn't be happier!" },
                { name: "Raj P.", text: "Best visa consultants in Brampton. They guided us through the visitor visa process step by step." },
              ].map((r) => (
                <div key={r.name} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-blue-400 text-xs font-medium mt-3">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Visit us in Brampton or give us a call. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call (905) 616-1739
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-800 transition-all"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
