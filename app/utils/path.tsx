"use client";
import { usePathname } from "next/navigation";

export default function Path({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <div>{children}</div>;
}
