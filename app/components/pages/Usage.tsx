import { PortableText } from "@portabletext/react";
import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";

export default async function Usage() {
  const profile: ProfileType[] = await getProfile();

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      {profile.map((textBlock, id) => (
        <PortableText
          key={id}
          value={textBlock.usage}
          components={CustomPortableTextFavicon}
        />
      ))}
    </section>
  );
}
