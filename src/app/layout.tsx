import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Webflow Experts",
  description: "Professional Webflow Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.variable + ' font-sans bg-black text-white'}>
        <Header />
        <main className="pt-20">
        {children}
        </main>
      </body>
    </html>
  );
}
