import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";
import PortableImage from "./PortableImage";

export const CustomPortableTextComponent: PortableTextComponents = {
  types: { image: PortableImage },
  block: {
    normal: ({ children }) => <p className="mt-2 mb-8">{children}</p>,
    h1: ({ children }) => (
      <h1 className="before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-6 before:text-3xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-bold tracking-tight text-5xl dark:text-zinc-100 text-zinc-700 mb-2 mt-6">
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}
        >
          {children}
        </Link>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl inline-block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 text-4xl text-zinc-700 mb-2 mt-6">
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}
        >
          {children}
        </Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl dark:text-zinc-100 text-zinc-700 mb-2 mt-6">
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}
        >
          {children}
        </Link>
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative overflow-clip font-blender font-medium tracking-tight text-2xl my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-100 rounded-md">
        <BiSolidQuoteRight className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-800 text-zinc-200" />
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="dark:text-primary-color text-secondary-color">
        {children}
      </em>
    ),
    link: ({ children, value }) => {
      return (
        <a
          className="inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 visited:dark:text-purple-400 visited:text-purple-500 hover:underline"
          href={value?.href}
          rel="noreferrer noopener"
          target="_blank"
        >
          {children} <BiLinkExternal className="inline mr-1" />
        </a>
      );
    },
    code: ({ children }) => (
      <code className="font-blender font-semibold text-[1.26rem] py-[0.15rem] px-1 rounded-sm dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-200 text-zinc-600">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex flex-col gap-y-5 list-[square] mt-5 ml-5">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex flex-col gap-y-5 list-decimal mt-5 ml-5">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-1">{children}</li>,
  },
};
