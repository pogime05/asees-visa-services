import Link from "next/link";
import {
  ShieldCheck,
  Plane,
  BookOpen,
  Home,
  FileText,
  FileCheck,
  Users,
  Globe,
  Stamp,
  Languages,
  ScrollText,
  Briefcase,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";

const categories = [
  {
    heading: "Passport Services",
    Icon: ShieldCheck,
    gradient: "from-blue-600 to-blue-800",
    lightBg: "bg-blue-50",
    textColor: "text-blue-700",
    services: [
      { Icon: ShieldCheck, title: "New Passport Application", desc: "Complete assistance with first-time Canadian passport applications including document checklist and form guidance." },
      { Icon: Clock, title: "Passport Renewal", desc: "Hassle-free renewals for expired or soon-to-expire Canadian passports — regular and urgent processing available." },
      { Icon: Users, title: "Child Passport", desc: "Guidance on passport applications for minors including consent requirements and supporting documents." },
      { Icon: Plane, title: "Emergency / Urgent Passport", desc: "Priority processing for clients with imminent travel dates or emergencies." },
    ],
  },
  {
    heading: "Visa Services",
    Icon: Plane,
    gradient: "from-indigo-600 to-indigo-800",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-700",
    services: [
      { Icon: Plane, title: "Visitor Visa (Tourist)", desc: "Applications for temporary resident visas to visit Canada for tourism, sightseeing, or recreation." },
      { Icon: Users, title: "Super Visa (Parent & Grandparent)", desc: "Multi-entry visas for parents and grandparents of Canadian citizens or permanent residents — valid up to 10 years." },
      { Icon: Briefcase, title: "Business Visitor Visa", desc: "For professionals attending meetings, conferences, or negotiations in Canada." },
      { Icon: Globe, title: "Transit Visa", desc: "Assistance for those passing through Canada to another destination." },
    ],
  },
  {
    heading: "Study & Work Permits",
    Icon: BookOpen,
    gradient: "from-violet-600 to-purple-800",
    lightBg: "bg-violet-50",
    textColor: "text-violet-700",
    services: [
      { Icon: BookOpen, title: "Study Permit", desc: "Guidance for international students applying to study at a Designated Learning Institution (DLI) in Canada." },
      { Icon: FileCheck, title: "Study Permit Extension", desc: "Renewal assistance to ensure uninterrupted status while continuing your education." },
      { Icon: Briefcase, title: "Open Work Permit", desc: "Applications for open work permits allowing work for any employer in Canada." },
      { Icon: FileText, title: "Employer-Specific Work Permit", desc: "LMIA-based work permit applications for employer-specific positions." },
    ],
  },
  {
    heading: "Permanent Residency",
    Icon: Home,
    gradient: "from-emerald-600 to-green-800",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-700",
    services: [
      { Icon: Globe, title: "Express Entry (Federal Skilled Worker)", desc: "Profile creation, CRS score optimization, and full application support for the Express Entry pool." },
      { Icon: MapPin, title: "Provincial Nominee Program (PNP)", desc: "Guidance on Ontario-specific streams and provincial nomination applications." },
      { Icon: Users, title: "Family Sponsorship", desc: "Sponsoring a spouse, common-law partner, dependent children, or parents for permanent residence." },
      { Icon: FileCheck, title: "PR Card Renewal", desc: "Application support for renewing an expiring Permanent Resident card." },
    ],
  },
  {
    heading: "Document Services",
    Icon: FileText,
    gradient: "from-orange-500 to-orange-700",
    lightBg: "bg-orange-50",
    textColor: "text-orange-700",
    services: [
      { Icon: Stamp, title: "Document Notarization", desc: "Certified notarization of personal, legal, and immigration documents." },
      { Icon: FileCheck, title: "Apostille & Authentication", desc: "Authentication of documents for use abroad through Global Affairs Canada." },
      { Icon: Languages, title: "Translation Services", desc: "Certified translation of documents from multiple languages to English or French." },
      { Icon: ScrollText, title: "Affidavit Preparation", desc: "Drafting and witnessing sworn affidavits for immigration and legal purposes." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-6">
            Comprehensive passport, visa, and immigration services tailored to your unique needs.
          </p>
          <a
            href="tel:9056161739"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 transition-all"
          >
            <Phone className="w-4 h-4" /> Call to Book a Consultation
          </a>
        </div>
      </section>

      {/* Service categories */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat, i) => {
            const CatIcon = cat.Icon;
            return (
              <div key={cat.heading}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    <CatIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">{cat.heading}</h2>
                    <div className={`h-1 w-16 mt-1 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                  </div>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.services.map((s) => {
                    const SIcon = s.Icon;
                    return (
                      <div
                        key={s.title}
                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                      >
                        <div className={`w-10 h-10 rounded-xl ${cat.lightBg} ${cat.textColor} flex items-center justify-center mb-3`}>
                          <SIcon className="w-5 h-5" />
                        </div>
                        <h3 className={`font-bold text-slate-900 mb-2 group-hover:${cat.textColor} transition-colors text-sm`}>{s.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Divider (not after last) */}
                {i < categories.length - 1 && (
                  <div className="mt-16 border-t border-slate-100" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-light" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Not Sure Where to Start?</h2>
          <p className="text-blue-200 mb-6">
            Our consultants will assess your situation and recommend the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call (905) 616-1739
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              <MapPin className="w-4 h-4" /> Visit Us in Brampton
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
