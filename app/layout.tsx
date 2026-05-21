import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

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
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
