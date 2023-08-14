import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";
import PortableImage from "./PortableImage";
import CodeBlock from "./CodeBlock";

export const CustomPortableText: PortableTextComponents = {
  types: {
    image: PortableImage,
    code: CodeBlock,
  },
  block: {
    normal: ({ children }) => <p className="mt-2 mb-6">{children}</p>,
    h2: ({ children }) => (
      <h2 className="before:content-['#'] before:hidden hover:before:inline-block before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-8">
        <Link
          href={`#${children
            ?.toString()
            .toLowerCase()
            .replaceAll(/[^-\w]+/g, "-")
            .replaceAll(/--+/g, "-")
            .replace(/^-|-$/g, "")}`}
        >
          {children}
        </Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="before:content-['#'] before:hidden hover:before:inline-block before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative block lg:font-bold font-semibold tracking-tight lg:text-3xl text-2xl dark:text-zinc-100 text-zinc-700 my-6">
        <Link
          href={`#${children
            ?.toString()
            .toLowerCase()
            .replaceAll(/[^-\w]+/g, "-")
            .replaceAll(/--+/g, "-")
            .replace(/^-|-$/g, "")}`}
        >
          {children}
        </Link>
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="before:content-['#'] before:hidden hover:before:inline-block before:absolute lg:before:-left-6 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-xl dark:text-zinc-100 text-zinc-700 mb-2 mt-4">
        <Link
          href={`#${children
            ?.toString()
            .toLowerCase()
            .replaceAll(/[^-\w]+/g, "-")
            .replaceAll(/--+/g, "-")
            .replace(/^-|-$/g, "")}`}
        >
          {children}
        </Link>
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative overflow-clip font-blender font-medium tracking-tight text-2xl my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-200 rounded-md">
        <BiSolidQuoteRight
          className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-800 text-zinc-200"
          aria-hidden="true"
        />
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
    strong: ({ children }) => (
      <strong className="font-bold dark:text-zinc-300 text-zinc-700">
        {children}
      </strong>
    ),
    link: ({ children, value }) => {
      return (
        <a
          className="inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 hover:underline"
          href={value?.href}
          rel="noreferrer noopener"
          target="_blank"
        >
          {children} <BiLinkExternal className="inline" aria-hidden="true" />
        </a>
      );
    },
    code: ({ children }) => (
      <code className="py-[0.15rem] px-1 rounded-sm font-medium dark:bg-primary-bg bg-secondary-bg dark:text-zinc-200 text-pink-500">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-[square] mt-5 ml-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal mt-5 ml-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-4">{children}</li>,
    number: ({ children }) => <li className="mb-4">{children}</li>,
  },
};
