import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function RefLink({
  href,
  children,
  className,
}: {
  href: Url;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href + "?ref=victoreke.com"}
      rel="noopener"
      target="_blank"
      className={className}
    >
      {children}
    </Link>
  );
}
