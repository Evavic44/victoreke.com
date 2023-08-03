// Fetch heroes that are true _document === 'profile' && heroes == true

const heroes: string[] = [
  "Brad Traversy",
  "Annie Bombanie",
  "Sanusi Victor",
  "Israel Mitolu",
  "Spiff Jekey Green",
  "Abigail Reinmemer",
  "Franklin Ohaegbulam",
];

export default function Heroes() {
  return (
    <section className="mt-24 max-w-2xl">
      <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
      <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
        I&apos;ve been fortunate enough to meet some of my heroes, but I still
        have a long way to go. This is a list of some of the people I'd like to
        high five IRL.
      </p>

      <ul className="flex flex-wrap items-center gap-3 mt-8 font-medium tracking-tight">
        {heroes.map((heroe, id) => (
          <li
            key={id}
            className="dark:bg-[#1d1d20] bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md px-2 py-1"
          >
            {heroe}
          </li>
        ))}
      </ul>
    </section>
  );
}
