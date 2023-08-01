import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

export default function SampleImageComponent({ value }: { value: any }) {
  return (
    <figure className="my-10">
      <Image
        src={urlFor(value).url()}
        alt={value.alt || ""}
        loading="lazy"
        width={800}
        height={800}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
