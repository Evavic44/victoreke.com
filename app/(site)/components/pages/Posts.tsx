import Image from "next/legacy/image";
import Link from "next/link";
import { getPosts } from "@/lib/sanity.query";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";

export default async function Posts() {
  const posts: PostType[] = await getPosts();

  return (
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) => (
            <article key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200"
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
                  <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
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
          ))}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
