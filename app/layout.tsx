import "./global.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inria_Sans, Patrick_Hand_SC } from "next/font/google";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";

import { baseUrl } from "./sitemap";

import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "kotakun.blog",
    template: "%s | kotakun.blog",
  },
  description: "This is Kota Cody Enokida's personal blog.",
  openGraph: {
    title: "kotakun.blog",
    description: "This is Kota Cody Enokida's personal blog.",
    url: baseUrl,
    siteName: "kotakun.blog",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

const inriaSans = Inria_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-sans",
  display: "swap",
});

const patrickHandsSC = Patrick_Hand_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand-sc",
  display: "swap",
});

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable,
        patrickHandsSC.variable,
        inriaSans.variable
      )}
    >
      <body className="antialiased mt-6 mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-6 md:px-0">
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
