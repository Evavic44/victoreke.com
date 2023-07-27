import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job";
import {
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoCodepen,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="font-blender text-3xl font-black tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center flex-wrap gap-x-6 gap-y-4 my-10 font-black font-blender text-lg">
                <li>
                  <a
                    href={data.socialLinks.github}
                    rel="noreferer noopener"
                    className="flex items-center gap-x-2 hover:text-zinc-500 hover:dark:text-primary-color"
                  >
                    <BiLogoGithub /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={data.socialLinks.linkedin}
                    rel="noreferer noopener"
                    className="flex items-center gap-x-2 hover:text-zinc-500 hover:dark:text-primary-color"
                  >
                    <BiLogoLinkedinSquare />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={data.socialLinks.twitter}
                    rel="noreferer noopener"
                    className="flex items-center gap-x-2 hover:text-zinc-500 hover:dark:text-primary-color"
                  >
                    <BiLogoTwitter />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={data.socialLinks.codepen}
                    rel="noreferer noopener"
                    className="flex items-center gap-x-2 hover:text-zinc-500 hover:dark:text-primary-color"
                  >
                    <BiLogoCodepen />
                    Codepen
                  </a>
                </li>
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}
