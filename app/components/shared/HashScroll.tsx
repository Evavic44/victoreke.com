// "use client";
import Link from "next/link";

type props = {
  text: React.ReactNode;
  event?: any;
};

// export const scrollTop = (header: HTMLHeadingElement) => {
//   header.scrollIntoView({ behavior: "smooth" });
// };

export const slugify = (id: any) => {
  if (id) {
    id.toString()
      .toLowerCase()
      .replaceAll(/[^-\w]+/g, "-")
      .replaceAll(/--+/g, "-")
      .replace(/^-|-$/g, "");
  }
  return "";
};

export default function HashScroll({ text, event }: props) {
  return (
    <Link
      onClick={event}
      href={`#${text
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "")}`}
    >
      {text}
    </Link>
  );
}
