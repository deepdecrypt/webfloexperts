import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
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
      <body className={jakarta.variable + ' font-sans text-white'} style={{ backgroundColor: '#020103' }}>
        <Header />
        <main className="pt-20">
        {children}
        </main>
      </body>
    </html>
  );
}
