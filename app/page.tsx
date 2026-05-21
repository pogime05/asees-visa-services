import Link from "next/link";

const services = [
  {
    icon: "🛂",
    title: "Passport Services",
    desc: "New applications, renewals, and urgent processing for Canadian passports.",
  },
  {
    icon: "✈️",
    title: "Visitor Visas",
    desc: "Tourist and family visit visas with expert guidance on documentation.",
  },
  {
    icon: "🎓",
    title: "Study Permits",
    desc: "Student visa applications and permit extensions for international students.",
  },
  {
    icon: "💼",
    title: "Work Permits",
    desc: "Open and employer-specific work permits for skilled workers.",
  },
  {
    icon: "🏠",
    title: "Permanent Residency",
    desc: "Express Entry, Provincial Nominee, and family sponsorship applications.",
  },
  {
    icon: "📄",
    title: "Document Authentication",
    desc: "Notarization, apostille, and document legalization services.",
  },
];

const reasons = [
  {
    icon: "⭐",
    title: "5-Star Rated",
    desc: "Consistently rated 5 stars by our clients on Google with over 500 reviews.",
  },
  {
    icon: "🏆",
    title: "15+ Years Experience",
    desc: "Over a decade of proven expertise in Canadian immigration and visa services.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "We process applications quickly without compromising accuracy or quality.",
  },
  {
    icon: "🤝",
    title: "Personalized Support",
    desc: "One-on-one guidance from start to finish — we're with you every step.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-orange-500/10 rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm font-medium mb-5">
              <span className="text-amber-400">★</span> 5.0 Google Rating · Brampton, Ontario
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Trusted{" "}
              <span className="text-orange-400">Passport &amp; Visa</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              From visitor visas to permanent residency — Asees Passport and Visa Services handles every step of your immigration journey with care and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9056161739"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (905) 616-1739
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur transition-all"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0★", label: "Google Rating" },
              { value: "500+", label: "5-Star Reviews" },
              { value: "15+", label: "Years in Business" },
              { value: "10,000+", label: "Clients Served" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-blue-700">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              What We Can Do For You
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Comprehensive immigration and documentation services under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 transition-all group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Why Thousands Choose Asees
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Located in the heart of Brampton at 30 Intermodal Drive, we&apos;ve built our reputation on trust, accuracy, and results. Our clients come back — and they bring their families.
              </p>
              <div className="space-y-5">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg shrink-0">
                      {r.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{r.title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="space-y-4">
              {[
                {
                  name: "Harpreet S.",
                  text: "Exceptional service! They handled our entire PR application smoothly. Highly recommend Asees for any immigration needs.",
                },
                {
                  name: "Mandeep K.",
                  text: "Very professional and knowledgeable staff. Got my study permit sorted quickly. Couldn't be happier!",
                },
                {
                  name: "Raj P.",
                  text: "Best visa consultants in Brampton. They guided us through the visitor visa process step by step.",
                },
              ].map((r) => (
                <div key={r.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <div className="flex text-amber-400 text-sm mb-2">★★★★★</div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-slate-500 text-xs font-medium mt-3">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Visit us in Brampton or give us a call. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-all shadow"
            >
              Call (905) 616-1739
            </a>
            <Link
              href="/contact"
              className="bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-800 transition-all"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
