import Image from "next/image";

type faviconTypes = {
  domain: string;
  alt: string;
};

export default function Favicon({ domain, alt }: faviconTypes) {
  // const duckduckgo = `https://icons.duckduckgo.com/ip3/sanity.io.ico`;

  function extractDomain(url: string): string | null {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/i
    );
    return match ? match[1] : null;
  }

  return (
    <Image
      src={`https://icons.duckduckgo.com/ip3/${extractDomain(domain)}.ico`}
      width={20}
      height={20}
      alt={alt}
    />
  );
}
