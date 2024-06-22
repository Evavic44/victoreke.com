"use client";

import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Clipoboard({ content }: { content: string }) {
  const [status, setStatus] = useState(false);

  function handleClipboard() {
    navigator.clipboard.writeText(content);
    setStatus(true);

    setTimeout(() => {
      setStatus((status) => !status);
    }, 1500);
  }

  return (
    <button onClick={handleClipboard}>
      {!status ? (
        <BiCopy />
      ) : (
        <RiCheckboxCircleFill className="text-secondary-color transition" />
      )}
    </button>
  );
}
