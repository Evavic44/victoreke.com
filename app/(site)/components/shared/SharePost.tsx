import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";

const options = [
  {
    icon: BiLogoTwitter,
    url: "twitter.com/post",
  },
  {
    icon: BiLogoLinkedinSquare,
    url: "linkedin.com/in/post",
  },
  {
    icon: BiLogoFacebookSquare,
    url: "facebook.com/post",
  },
];

export default function SharePost() {
  return (
    <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4">Share Post</h3>

      <ul className="flex flex-wrap items-center gap-2 tracking-tight">
        {options.map((x) => (
          <li>
            <a
              href={x.url}
              className="w-12 h-12 p-2 grid place-content-center text-2xl dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md"
            >
              <x.icon aria-label={`share to ${x.url}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
