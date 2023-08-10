import { getPosts } from "@/lib/sanity.query";
import type { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../utils/date";
import { BiCalendar, BiTime } from "react-icons/bi";

export default async function FeaturedPosts() {
  const featuredPosts: PostType[] = await getPosts();

  return (
    <div className="flex flex-col gap-y-6 lg:max-w-[950px] max-w-full mb-12">
      {featuredPosts.map((post) =>
        post.featured !== true ? null : (
          <article key={post._id}>
            <Link
              href={`/blog/${post.slug}`}
              key={post._id}
              className="flex lg:flex-row flex-col lg:items-center items-start gap-8"
            >
              <div className="relative lg:w-[450px] lg:h-52 w-full h-56">
                <Image
                  src={post.coverImage.image}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                  alt={post.coverImage.alt || post.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={post.coverImage.lqip}
                />
              </div>
              <div className="max-w-lg">
                <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600">
                  {post.description}
                </p>

                <div className="flex items-center gap-x-4 mt-3 text-sm">
                  <div className="flex items-center gap-x-2">
                    <BiCalendar />
                    <p className="">
                      {post._createdAt && formatDate(post._createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <BiTime />
                    <p className="">5 min</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        )
      )}
    </div>
  );
}
