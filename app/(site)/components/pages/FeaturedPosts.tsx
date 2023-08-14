import Link from "next/link";
import Image from "next/legacy/image";
import { getPosts } from "@/lib/sanity.query";
import type { PostType } from "@/types";

export default async function FeaturedPosts({ params }: { params: string }) {
  const featuredPosts: PostType[] = await getPosts();

  return (
    <section className="flex flex-col gap-y-4">
      {featuredPosts.map((post) =>
        post.featured !== true ? null : (
          <article
            key={post._id}
            className={`${post.slug === params ? "hidden" : "block"}`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={post.coverImage.image}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage.alt || post.title}
                width={400}
                height={230}
                placeholder="blur"
                blurDataURL={post.coverImage.lqip}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-lg font-semibold tracking-tight mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </section>
  );
}