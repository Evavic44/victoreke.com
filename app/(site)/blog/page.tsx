import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getProjects } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";

export const metadata: Metadata = {
  title: "Blog | Victor Eke",
  metadataBase: new URL("https://victoreke.com/blog"),
  description: "Read latest stories from Victor Eke's Blog",
  openGraph: {
    title: "Blog | Victor Eke",
    url: "https://victoreke.com/blog",
    description: "Read latest stories from Victor Eke's Blog",
  },
};

type blogType = {
  _id: number;
  slug: string;
  logo: string;
  name: string;
  tagline: string;
};

export default async function Blog() {
  // const projects: ProjectType[] = await getProjects();
  const blogs: any = [];

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="mb-16 pb-12 border-b dark:border-zinc-800 border-zinc-100">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem]">
            Blog
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Welcome to my blog domain where I share personal stories about
            things I&apos;ve learned, personal stories or projects and findings.
          </p>

          <div className="my-8">
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Aside from this blog, I&apos;ve also written for other
              publications. Some of them include:
            </p>
          </div>
        </div>
      </section>

      {blogs.length > 0 ? (
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {blogs.map((post: blogType) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post._id}
              className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
            >
              <Image
                src={post.logo}
                width={60}
                height={60}
                alt={post.name}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
              />
              <div>
                <h2 className="font-semibold mb-1">{post.name}</h2>
                <div className="text-sm dark:text-zinc-400 text-zinc-600">
                  {post.tagline}
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </main>
  );
}
