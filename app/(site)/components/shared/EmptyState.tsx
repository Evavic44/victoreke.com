import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";

type stateType = {
  value: string;
  icon?: React.ReactNode;
};

export default function EmptyState({ value, icon }: stateType) {
  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-[#1d1d20] bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-100 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500">
        {!icon ? (
          <Image
            width={80}
            height={80}
            src={duckImage}
            alt="Yellow duck searching"
          />
        ) : (
          icon
        )}
      </div>
      <h3 className="   font-bold tracking-tight text-xl mb-3">
        No {value} Found
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 text-left list-disc ml-4">
        There are no {value.toLowerCase()} available at this time.
      </p>
      <a
        href="https://freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs"
        rel="noreferrer noopener"
        target="_blank"
        className="dark:bg-zinc-800 bg-white flex items-center gap-x-3 px-4 py-2    font-bold tracking-tight"
      >
        <BiLinkExternal /> Read Guide
      </a>
    </div>
  );
}
