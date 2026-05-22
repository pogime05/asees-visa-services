import Link from "next/link";
import {
  ShieldCheck, Plane, BookOpen, Home, FileText, FileCheck,
  Users, Globe, Stamp, Languages, ScrollText, Briefcase,
  Clock, Phone, MapPin, ArrowRight, ChevronRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Card3D from "@/components/Card3D";
import FloatingOrbs from "@/components/FloatingOrbs";

const categories = [
  {
    heading: "Passport Services",
    Icon: ShieldCheck,
    gradient: "from-cyan-400 to-cyan-600",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    services: [
      { Icon: ShieldCheck, title: "New Passport Application",   desc: "Complete assistance with first-time Canadian passport applications including document checklist and form guidance." },
      { Icon: Clock,        title: "Passport Renewal",          desc: "Hassle-free renewals for expired or soon-to-expire passports — regular and urgent processing available." },
      { Icon: Users,        title: "Child Passport",            desc: "Guidance on passport applications for minors including consent requirements and supporting documents." },
      { Icon: Plane,        title: "Emergency / Urgent Passport",desc: "Priority processing for clients with imminent travel dates or family emergencies." },
    ],
  },
  {
    heading: "Visa Services",
    Icon: Plane,
    gradient: "from-blue-400 to-blue-600",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    services: [
      { Icon: Plane,     title: "Visitor Visa (Tourist)",          desc: "Applications for temporary resident visas to visit Canada for tourism, sightseeing, or recreation." },
      { Icon: Users,     title: "Super Visa (Parent & Grandparent)",desc: "Multi-entry visas valid up to 10 years for parents and grandparents of Canadian citizens or PRs." },
      { Icon: Briefcase, title: "Business Visitor Visa",           desc: "For professionals attending meetings, conferences, or negotiations in Canada." },
      { Icon: Globe,     title: "Transit Visa",                    desc: "Assistance for those passing through Canada en route to another destination." },
    ],
  },
  {
    heading: "Study & Work Permits",
    Icon: BookOpen,
    gradient: "from-violet-400 to-violet-600",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    services: [
      { Icon: BookOpen,  title: "Study Permit",           desc: "Guidance for international students applying to study at a Designated Learning Institution (DLI) in Canada." },
      { Icon: FileCheck, title: "Study Permit Extension", desc: "Renewal assistance to ensure uninterrupted status while continuing your education in Canada." },
      { Icon: Briefcase, title: "Open Work Permit",       desc: "Applications for open work permits allowing work for any employer across Canada." },
      { Icon: FileText,  title: "Employer-Specific Work Permit", desc: "LMIA-based work permit applications for employer-specific and specialized positions." },
    ],
  },
  {
    heading: "Permanent Residency",
    Icon: Home,
    gradient: "from-teal-400 to-emerald-600",
    accent: "text-teal-400",
    border: "border-teal-500/20",
    services: [
      { Icon: Globe,     title: "Express Entry (Federal Skilled Worker)", desc: "Profile creation, CRS score optimization, and full application support for the Express Entry pool." },
      { Icon: MapPin,    title: "Provincial Nominee Program (PNP)", desc: "Guidance on Ontario-specific streams and provincial nomination applications." },
      { Icon: Users,     title: "Family Sponsorship",    desc: "Sponsoring a spouse, common-law partner, dependent children, or parents for permanent residence." },
      { Icon: FileCheck, title: "PR Card Renewal",       desc: "Application support for renewing an expiring Permanent Resident card." },
    ],
  },
  {
    heading: "Document Services",
    Icon: FileText,
    gradient: "from-indigo-400 to-indigo-600",
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
    services: [
      { Icon: Stamp,      title: "Document Notarization",  desc: "Certified notarization of personal, legal, and immigration documents." },
      { Icon: FileCheck,  title: "Apostille & Authentication", desc: "Authentication of documents for use abroad through Global Affairs Canada." },
      { Icon: Languages,  title: "Translation Services",   desc: "Certified translation of documents from multiple languages to English or French." },
      { Icon: ScrollText, title: "Affidavit Preparation",  desc: "Drafting and witnessing sworn affidavits for immigration and legal purposes." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 mesh-bg text-white overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="h-px w-8 bg-cyan-400" /> Our Services <span className="h-px w-8 bg-cyan-400" />
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Everything You Need,<br />
              <span className="gradient-text">Under One Roof</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Comprehensive passport, visa, and immigration services tailored to your unique situation.
            </p>
            <a
              href="tel:9056161739"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full glow-cyan-sm hover:glow-cyan transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call to Book a Consultation
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, ci) => {
            const CatIcon = cat.Icon;
            return (
              <div key={cat.heading}>
                <AnimateIn>
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                      <CatIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-white">{cat.heading}</h2>
                      <div className={`h-0.5 w-16 mt-1.5 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                    </div>
                  </div>
                </AnimateIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.services.map((s, si) => {
                    const SIcon = s.Icon;
                    return (
                      <AnimateIn key={s.title} delay={si * 0.07}>
                        <Card3D className="h-full">
                          <div className={`h-full glass-card rounded-2xl p-5 border ${cat.border} hover:border-opacity-60 group transition-all duration-300`}>
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform`}>
                              <SIcon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className={`font-bold text-white text-sm mb-2 group-hover:${cat.accent} transition-colors`}>{s.title}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                          </div>
                        </Card3D>
                      </AnimateIn>
                    );
                  })}
                </div>

                {ci < categories.length - 1 && (
                  <div className="mt-20 border-t border-white/5" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#030712] py-20 overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 pattern-dots-dark opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Our consultants will assess your situation and recommend the best path forward — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9056161739"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-full glow-cyan-sm hover:glow-cyan transition-all"
              >
                <Phone className="w-4 h-4" /> Call (905) 616-1739
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                <MapPin className="w-4 h-4 text-cyan-400" /> Visit Us in Brampton
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
