import Link from "next/link";

const values = [
  {
    icon: "🎯",
    title: "Accuracy First",
    desc: "Every application is reviewed thoroughly to ensure all information is correct and complete before submission.",
  },
  {
    icon: "🔒",
    title: "Confidentiality",
    desc: "Your personal documents and information are handled with the highest level of privacy and discretion.",
  },
  {
    icon: "💡",
    title: "Transparent Advice",
    desc: "We provide honest assessments of your case — no false promises, just clear and straightforward guidance.",
  },
  {
    icon: "❤️",
    title: "Community Focused",
    desc: "Proudly serving the diverse Brampton community, including South Asian, Caribbean, and Filipino newcomers.",
  },
];

const team = [
  {
    name: "Asees Immigration Team",
    role: "Licensed Immigration Consultants",
    desc: "Our consultants are authorized by the College of Immigration and Citizenship Consultants (CICC) and bring years of hands-on experience.",
  },
  {
    name: "Document Specialists",
    role: "Notarization & Authentication",
    desc: "Trained professionals who ensure your documents meet all legal and government requirements.",
  },
  {
    name: "Client Support Staff",
    role: "Bilingual Customer Service",
    desc: "Friendly, multilingual staff available to answer questions in English, Punjabi, Hindi, and more.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Asees</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A Brampton institution built on trust, expertise, and a genuine commitment to helping people navigate their immigration journey.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Asees Passport and Visa Services Inc. was founded with a single mission: to make the complex world of immigration accessible and stress-free for families and individuals across the Greater Toronto Area.
                </p>
                <p>
                  Located at 30 Intermodal Drive in Brampton — one of Canada&apos;s most diverse cities — we&apos;ve grown from a small passport agency into a full-service immigration consultancy trusted by thousands of clients.
                </p>
                <p>
                  Over the years, we&apos;ve helped newcomers, students, skilled workers, and families achieve their Canadian dreams. We take pride in every file we touch and every life we help change.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "15+", label: "Years Serving" },
                  { value: "10K+", label: "Clients Helped" },
                  { value: "5.0★", label: "Google Rating" },
                ].map((s) => (
                  <div key={s.label} className="bg-blue-50 rounded-2xl p-4">
                    <p className="text-2xl font-extrabold text-blue-700">{s.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-5">🌍</div>
              <h3 className="text-2xl font-bold mb-3">Serving All Nationalities</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We work with clients from over 50 countries, helping them navigate Canadian immigration law with confidence.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                {[
                  "India & South Asia",
                  "Philippines & Southeast Asia",
                  "Caribbean & Africa",
                  "Middle East & Europe",
                  "Latin America",
                ].map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Our Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Our Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">{m.name[0]}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{m.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{m.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Let&apos;s Work Together</h2>
          <p className="text-orange-100 mb-6">
            Come meet our team in Brampton or give us a call to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-all shadow"
            >
              Call (905) 616-1739
            </a>
            <Link
              href="/services"
              className="bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-800 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
