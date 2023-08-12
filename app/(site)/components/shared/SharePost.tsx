import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";

type props = {
  title: string;
  url: string;
};

export default function SharePost({ title, url }: props) {
  const options = [
    {
      icon: BiLogoTwitter,
      name: "Twitter",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: BiLogoLinkedinSquare,
      name: "LinkedIn",
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: BiLogoFacebookSquare,
      name: "Facebook",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
  ];

  return (
    <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4">Share Post</h3>

      <ul className="flex flex-wrap items-center gap-2 tracking-tight">
        {options.map((x, id) => (
          <li key={id}>
            <a
              href={x.shareUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="w-12 h-12 p-2 grid place-content-center text-2xl dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md"
            >
              <x.icon aria-label={`share to ${x.name}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
