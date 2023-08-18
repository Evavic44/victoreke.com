import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";

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

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-[950px] mb-12 pb-12 border-b dark:border-zinc-800 border-zinc-100">
        <div className="max-w-2xl">
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Blog
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Welcome to my blog domain where I share personal stories about
            things I&apos;ve learned, personal stories or projects and findings.
          </p>

          <div className="my-8">
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Aside from this blog, I&apos;ve also written for other
              publications.
            </p>
          </div>
          <Social type="publication" />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </section>
    </main>
  );
}
