import { Slide } from "@/app/animation/Slide";

type HeadingType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeading({
  title,
  description,
  children,
}: HeadingType) {
  return (
    <header className="mb-10">
      <Slide>
        <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
        {children}
      </Slide>
    </header>
  );
}
