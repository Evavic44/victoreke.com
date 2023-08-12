import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import blender from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Victor Eke | Software Developer",
  metadataBase: new URL("https://victoreke.com"),
  description:
    "Victor Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  openGraph: {
    title: "Victor Eke | Software Developer",
    url: "https://victoreke.com",
    siteName: "Victor Eke",
    locale: "en-US",
    type: "website",
    description:
      "Victor Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1690292066/victoreke/og.png",
  },
  twitter: {
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
    <html lang="en" className="dark">
      <body
        className={`${blender.variable} ${inter.className} bg-noise bg-[200px,200px] bg-zero dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
