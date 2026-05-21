import Link from "next/link";

const categories = [
  {
    heading: "Passport Services",
    icon: "🛂",
    color: "from-blue-500 to-blue-700",
    services: [
      {
        title: "New Passport Application",
        desc: "Complete assistance with first-time Canadian passport applications including document checklist and form guidance.",
      },
      {
        title: "Passport Renewal",
        desc: "Hassle-free renewals for expired or soon-to-expire Canadian passports — regular and urgent processing available.",
      },
      {
        title: "Child Passport",
        desc: "Guidance on passport applications for minors including consent requirements and supporting documents.",
      },
      {
        title: "Emergency/Urgent Passport",
        desc: "Priority processing for clients with imminent travel dates or emergencies.",
      },
    ],
  },
  {
    heading: "Visa Services",
    icon: "✈️",
    color: "from-indigo-500 to-indigo-700",
    services: [
      {
        title: "Visitor Visa (Tourist)",
        desc: "Applications for temporary resident visas to visit Canada for tourism, sightseeing, or recreation.",
      },
      {
        title: "Super Visa (Parent & Grandparent)",
        desc: "Multi-entry visas for parents and grandparents of Canadian citizens or permanent residents — valid up to 10 years.",
      },
      {
        title: "Business Visitor Visa",
        desc: "For professionals attending meetings, conferences, or negotiations in Canada.",
      },
      {
        title: "Transit Visa",
        desc: "Assistance for those passing through Canada to another destination.",
      },
    ],
  },
  {
    heading: "Study & Work Permits",
    icon: "🎓",
    color: "from-violet-500 to-purple-700",
    services: [
      {
        title: "Study Permit",
        desc: "Guidance for international students applying to study at a Designated Learning Institution (DLI) in Canada.",
      },
      {
        title: "Study Permit Extension",
        desc: "Renewal assistance to ensure uninterrupted status while continuing your education.",
      },
      {
        title: "Open Work Permit",
        desc: "Applications for open work permits allowing work for any employer in Canada.",
      },
      {
        title: "Employer-Specific Work Permit",
        desc: "LMIA-based work permit applications for employer-specific positions.",
      },
    ],
  },
  {
    heading: "Permanent Residency",
    icon: "🏠",
    color: "from-emerald-500 to-green-700",
    services: [
      {
        title: "Express Entry (Federal Skilled Worker)",
        desc: "Profile creation, CRS score optimization, and full application support for the Express Entry pool.",
      },
      {
        title: "Provincial Nominee Program (PNP)",
        desc: "Guidance on Ontario-specific streams and provincial nomination applications.",
      },
      {
        title: "Family Sponsorship",
        desc: "Sponsoring a spouse, common-law partner, dependent children, or parents for permanent residence.",
      },
      {
        title: "PR Card Renewal",
        desc: "Application support for renewing an expiring Permanent Resident card.",
      },
    ],
  },
  {
    heading: "Document Services",
    icon: "📄",
    color: "from-amber-500 to-orange-600",
    services: [
      {
        title: "Document Notarization",
        desc: "Certified notarization of personal, legal, and immigration documents.",
      },
      {
        title: "Apostille & Authentication",
        desc: "Authentication of documents for use abroad through Global Affairs Canada.",
      },
      {
        title: "Translation Services",
        desc: "Certified translation of documents from multiple languages to English or French.",
      },
      {
        title: "Affidavit Preparation",
        desc: "Drafting and witnessing sworn affidavits for immigration and legal purposes.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive passport, visa, and immigration services tailored to your unique needs.
          </p>
          <a
            href="tel:9056161739"
            className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
          >
            Call to Book a Consultation
          </a>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.heading}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm`}
                >
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">{cat.heading}</h2>
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.services.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Not Sure Where to Start?</h2>
          <p className="text-blue-100 mb-6">
            Our consultants will assess your situation and recommend the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow"
            >
              Call (905) 616-1739
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Visit Us in Brampton
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
