import Image from "next/image";
import { Metadata } from "next";
import { singleProjectQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import { sanityFetch } from "@/lib/sanity.client";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://victoreke.com/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images: project.coverImage
        ? urlFor(project.coverImage.image).width(1200).height(630).url()
        : fallbackImage,
      url: `https://victoreke.com/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </a>
            </div>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              fill
              src={project.coverImage?.image ?? fallbackImage}
              alt={project.coverImage?.alt ?? project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
