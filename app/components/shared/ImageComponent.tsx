import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

type imageProp = {
  src: {};
  alt: string;
};

export default function ImageComponent({ src, alt }: imageProp) {
  return (
    <Image
      className="rounded-sm object-contain object-left-top aspect-auto duration-300"
      src={urlFor(src).url()}
      alt={alt}
      loading="lazy"
      width={900}
      height={900}
      placeholder="blur"
      quality={100}
      blurDataURL={urlFor(src).blur(10).quality(10).url()}
    />
  );
}
