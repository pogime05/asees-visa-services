import Link from "next/link";
import {
  Target,
  Lock,
  Lightbulb,
  Heart,
  ShieldCheck,
  FileText,
  HeadphonesIcon,
  Globe,
  CheckCircle,
  Phone,
} from "lucide-react";

const values = [
  { Icon: Target, title: "Accuracy First", desc: "Every application is reviewed thoroughly to ensure all information is correct and complete before submission.", color: "from-blue-500 to-blue-700" },
  { Icon: Lock, title: "Confidentiality", desc: "Your personal documents and information are handled with the highest level of privacy and discretion.", color: "from-indigo-500 to-indigo-700" },
  { Icon: Lightbulb, title: "Transparent Advice", desc: "We provide honest assessments of your case — no false promises, just clear and straightforward guidance.", color: "from-violet-500 to-purple-700" },
  { Icon: Heart, title: "Community Focused", desc: "Proudly serving the diverse Brampton community, including South Asian, Caribbean, and Filipino newcomers.", color: "from-orange-500 to-orange-700" },
];

const team = [
  { Icon: ShieldCheck, name: "Immigration Consultants", role: "CICC Authorized", desc: "Our consultants are authorized by the College of Immigration and Citizenship Consultants (CICC) and bring years of hands-on experience.", color: "from-blue-600 to-indigo-700" },
  { Icon: FileText, name: "Document Specialists", role: "Notarization & Authentication", desc: "Trained professionals who ensure your documents meet all legal and government requirements.", color: "from-violet-600 to-purple-700" },
  { Icon: HeadphonesIcon, name: "Client Support Staff", role: "Bilingual Customer Service", desc: "Friendly, multilingual staff available to answer questions in English, Punjabi, Hindi, and more.", color: "from-emerald-600 to-green-700" },
];

const regions = ["India & South Asia", "Philippines & Southeast Asia", "Caribbean & Africa", "Middle East & Europe", "Latin America"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Asees</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A Brampton institution built on trust, expertise, and a genuine commitment to helping people navigate their immigration journey.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-5">
                <Globe className="w-4 h-4" /> Our Story
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
                Helping Families Build Their Canadian Future
              </h2>
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
                  <div key={s.label} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 text-white shadow-lg">
                    <p className="text-2xl font-extrabold">{s.value}</p>
                    <p className="text-xs text-blue-200 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-5">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Serving All Nationalities</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  We work with clients from over 50 countries, helping them navigate Canadian immigration law with confidence.
                </p>
                <ul className="space-y-3">
                  {regions.map((r) => (
                    <li key={r} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-sm font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-light" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Our Values</h2>
            <p className="text-blue-300 max-w-xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const VIcon = v.Icon;
              return (
                <div
                  key={v.title}
                  className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all text-center"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <VIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Our Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Experienced professionals dedicated to your success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => {
              const MIcon = m.Icon;
              return (
                <div
                  key={m.name}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${m.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <MIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{m.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{m.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Let&apos;s Work Together</h2>
          <p className="text-orange-100 mb-6">
            Come meet our team in Brampton or give us a call to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9056161739"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call (905) 616-1739
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-800 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
