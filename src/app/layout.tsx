import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bereli-medical.vercel.app"),
  title: "Bereli Medical Technologies | Precision Surgical Leg Holder Positioners",
  description:
    "Engineered for rapid intraoperative adjustability, zero slip drift, and uncompromised patient neurovascular safety during arthroscopy, lithotomy, and pelvic reconstructions.",
  keywords: [
    "Surgical leg positioners",
    "OmniGrip Lithotomy",
    "AeroFlex Orthopedic",
    "Surgical table rail clamps",
    "ASC surgical equipment",
    "Medical positioning hardware",
    "FDA 510(k) Cleared",
    "ISO 13485:2016",
  ],
  authors: [{ name: "Bereli Medical Technologies Inc." }],
  openGraph: {
    title: "Bereli Medical Technologies | Precision Surgical Positioning Hardware",
    description:
      "Precision Leg Holder Positioners for Surgery Centers. Engineered for zero slip drift and clinical neurovascular safety.",
    url: "https://bereli-medical.vercel.app",
    siteName: "Bereli Medical",
    images: [
      {
        url: "/images/hero-omnigrip.png",
        width: 1200,
        height: 630,
        alt: "Bereli OmniGrip Surgical Leg Holder Clamp and Boot Mechanism",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-medical-dark text-white font-sans antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
