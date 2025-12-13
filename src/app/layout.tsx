import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webfloexperts.com'),
  title: {
    default: 'Webflow Experts | Go-to-Market Focused Webflow Agency',
    template: '%s | Webfloexperts'
  },
  description: 'Launch your website & drive leads 10x faster. We build high-performing websites, MVPs, and automation that drive sales, hit product-market fit, and scale your business.',
  keywords: [
    'webflow development',
    'web development agency',
    'MVP development',
    'landing pages',
    'SEO optimization',
    'CRO services',
    'marketing automation',
    'AI automation',
    'custom websites',
    'go-to-market strategy',
    'webflow experts',
    'shopify migration',
    'website optimization'
  ],
  authors: [{ name: 'Webfloexperts' }],
  creator: 'Webfloexperts',
  publisher: 'Webfloexperts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/wxlogo.svg',
    shortcut: '/wxlogo.svg',
    apple: '/wxlogo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webfloexperts.com',
    siteName: 'Webfloexperts',
    title: 'Webflow Experts | Go-to-Market Focused Webflow Agency',
    description: 'Launch your website & drive leads 10x faster. We build high-performing websites, MVPs, and automation that drive sales, hit product-market fit, and scale your business.',
    images: [
      {
        url: '/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'Webflow Experts - Professional Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webflow Experts | Go-to-Market Focused Webflow Agency',
    description: 'Launch your website & drive leads 10x faster. We build high-performing websites, MVPs, and automation that drive sales.',
    images: ['/hero/hero.png'],
    creator: '@webfloexperts',
  },
  alternates: {
    canonical: 'https://webfloexperts.com',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans text-white antialiased" style={{ backgroundColor: '#020103', fontFamily: 'var(--font-jakarta), sans-serif' }} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebfloExperts",
              "url": "https://webfloexperts.com",
              "logo": "https://webfloexperts.com/wxlogo.svg",
              "sameAs": [
                "https://twitter.com/webfloexperts",
                "https://www.linkedin.com/company/webfloexperts"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "hello@webfloexperts.com"
              },
              "description": "Go-to-Market Focused Webflow Agency helping businesses maintain, improve, and scale their digital products."
            })
          }}
        />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
