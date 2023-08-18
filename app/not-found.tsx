import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";
import FeaturedPosts from "./components/pages/FeaturedPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error 404",
};

export default function Error404() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-2xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
        />
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          Error 404!
        </h1>
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Oopsies! This page does not exist on victoreke.com. While you&apos;re
          here, you can read some featured post below. 📑
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <FeaturedPosts params="" />
      </div>
    </main>
  );
}
