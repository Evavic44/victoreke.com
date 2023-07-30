import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

const SampleImageComponent = ({ value }: { value: any }) => {
  return (
    <figure>
      <Image
        src={urlFor(value).url()}
        alt={value.alt || ""}
        loading="lazy"
        width={800}
        height={800}
      />
      {value.caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

export const PortableTextComponent = {
  types: {
    image: SampleImageComponent,
  },

  // marks: {
  //   link: ({ children, value }: props) => {
  //     const rel = !value.href.startsWith("/")
  //       ? "noreferrer noopener"
  //       : undefined;
  //     return (
  //       <a href={value.href} rel={rel}>
  //         {children}
  //       </a>
  //     );
  //   },
  // },
};
