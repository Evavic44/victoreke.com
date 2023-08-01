import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Studio Backend for Victor Eke's portfolio site",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
