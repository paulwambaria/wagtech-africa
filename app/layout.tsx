import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wagtech Africa | Water Quality, Environmental Monitoring & Laboratory Solutions",
    template: "%s | Wagtech Africa",
  },
  description:
    "Africa's trusted partner since 1990 for water quality testing, environmental monitoring, hydromet systems, mobile laboratories and scientific instrumentation across Africa.",
  keywords: [
    "water quality testing Africa",
    "environmental monitoring",
    "hydromet systems",
    "mobile laboratory Africa",
    "heavy metals analysis",
    "weather stations Africa",
    "Wagtech Africa",
    "scientific equipment Africa",
    "water safety laboratory",
  ],
  authors: [{ name: "Wagtech Africa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wagtechafrica.com",
    siteName: "Wagtech Africa",
    title: "Wagtech Africa | Water Quality, Environmental Monitoring & Laboratory Solutions",
    description:
      "Africa's trusted partner since 1990 for water quality testing, environmental monitoring, hydromet systems, and scientific instrumentation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
