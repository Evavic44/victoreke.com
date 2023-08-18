// "use client";

// import Link from "next/link";
// import React, { useRef } from "react";

// export default function HashScroll({ text }: { text: React.ReactNode }) {
//   function scrollIntoView(e: any) {
//     const el = document.getElementsByTagName(
//       e.currentTarget.tagName.toLowerCase()
//     );
//   }

//   return (
//     <Link
//       id={`#${text}`}
//       onClick={scrollIntoView}
//       href={`#${text
//         ?.toString()
//         .toLowerCase()
//         .replaceAll(/[^-\w]+/g, "-")
//         .replaceAll(/--+/g, "-")
//         .replace(/^-|-$/g, "")}`}
//     >
//       {text}
//     </Link>
//   );
// }
