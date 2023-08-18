"use client";

import Link from "next/link";
import React from "react";

export default function HeadingLink({ text }: { text: any }) {
  const scroll = text.getBoundingClientRect();
  console.log(scroll);

  return (
    <Link
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
