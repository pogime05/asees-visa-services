import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Asees Passport & Visa Services | Brampton, Ontario",
  description:
    "Expert passport, visa, and immigration services in Brampton, Ontario. Trusted by thousands. Call us at (905) 616-1739.",
  keywords:
    "passport services Brampton, visa application Ontario, immigration consultant Brampton, study permit Canada, work permit Brampton",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
