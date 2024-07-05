import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import Favicon from "../../utils/favicon";
import RefLink from "./RefLink";

export const CustomPortableTextFavicon: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}
        >
          {children}
        </Link>
      </h3>
    ),
    normal: ({ children }) => <p className="mt-2 mb-6">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <RefLink
          href={value?.href}
          className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
        >
          <Favicon domain={value?.href} alt={value?.href} />
          {children}
        </RefLink>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        {children}
      </ul>
    ),
  },
  listItem: { bullet: ({ children }) => <li className="mb-4 ">{children}</li> },
};
