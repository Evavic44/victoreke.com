import Link from "next/link";
import Image from "next/legacy/image";
import { BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";

type props = {
  title: string;
  id: string;
  slug: string;
  image: string;
  alt: string;
  lqip: string;
  description: string;
  publishedAt: string;
};

export default function PostCard({
  title,
  id,
  slug,
  image,
  alt,
  lqip,
  description,
  publishedAt,
}: props) {
  return (
    <article key={id}>
      <Link
        href={`/blog/${slug}`}
        className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200"
      >
        <div className="relative lg:w-[450px] lg:h-52 w-full h-56">
          <Image
            src={image}
            className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
            alt={alt || title}
            layout="fill"
            placeholder="blur"
            blurDataURL={lqip}
          />
        </div>
        <div className="max-w-lg">
          <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
            {title}
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
            {description}
          </p>
          <div className="flex items-center gap-x-4 mt-3 text-sm">
            <div className="flex items-center gap-x-2">
              <BiCalendar />
              <p className="">{publishedAt && formatDate(publishedAt)}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <BiTime />
              <p className="">5 min</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
