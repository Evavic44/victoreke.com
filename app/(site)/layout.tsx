import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import blender from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Victor Eke | Software Developer",
  description:
    "Victor Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://victoreke.com",
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1690292066/victoreke/og.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "victoreke.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  twitter: {
    title: options.title,
    description: options.description,
    images: options.ogImage,
    creator: "Victor Eke",
    creatorId: "@victorekea",
    card: "summary_large_image",
  },
  themeColor: "#33E092",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${blender.variable} ${inter.className} bg-noise bg-[200px,200px] bg-zero dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
