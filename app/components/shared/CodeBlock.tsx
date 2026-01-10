// "use client";

import { Refractor } from "react-refractor";
import Clipoboard from "./Clipoboard";

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}
