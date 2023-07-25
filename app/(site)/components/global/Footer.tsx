export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          Copyright &copy; Victor Eke {new Date().getFullYear()}
        </small>

        <small className="hover:dark:text-white hover:text-zinc-500 duration-200">
          <a
            href="https://github.com/Evavic44/victoreke.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source <span className="text-primary-color">Code</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
