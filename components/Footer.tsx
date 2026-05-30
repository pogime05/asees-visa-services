import Link from "next/link";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#020712] text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Your trusted immigration partner in Brampton, Ontario. We make your Canadian journey smooth and stress-free.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-500 ml-1">5.0 on Google</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                    <span className="h-px w-3 bg-slate-700 group-hover:bg-cyan-400 group-hover:w-4 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-slate-400">30 Intermodal Dr #3,<br />Brampton, ON L6T 5K1</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <a href="tel:9056161739" className="hover:text-cyan-400 transition-colors">(905) 616-1739</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-slate-400">Mon–Fri: 10 AM – 7 PM<br />Sat: 10 AM – 5 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Asees Passport and Visa Services Inc. All rights reserved.</p>
          <p>Brampton, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
