"use client";

import Image from "next/image";
import { useState } from "react";
import funImage from "@/public/yeah-right.png";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

export default function EasterEgg({ isMet }: { isMet: boolean }) {
  const [image, setImage] = useState(false);

  const toggleImage = () => {
    const interval = setInterval(() => {
      setImage(true);
    });

    setTimeout(() => {
      setImage(false);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <>
      <button onClick={toggleImage}>
        {isMet !== true ? (
          <BiCheckbox
            className="text-3xl dark:text-zinc-300 text-zinc-600"
            aria-hidden="true"
          />
        ) : (
          <BiSolidCheckboxChecked
            className="text-3xl dark:text-primary-color text-secondary-color"
            aria-hidden="true"
          />
        )}
      </button>

      <Image
        className={`fixed z-30 bottom-1/2 duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          image ? "left-0" : "-left-80"
        }`}
        src={funImage}
        width={250}
        height={250}
        quality={100}
        alt="yeah right"
      />
    </>
  );
}
