import Link from "next/link";

export default function HeadingHash(hash: string) {
  return (
    <Link href={`#${hash?.toString().toLowerCase().replaceAll(" ", "-")}`}>
      {hash}
    </Link>
  );
}
