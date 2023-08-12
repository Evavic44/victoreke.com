import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={26} height={26} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="dark:text-white text-zinc-600 hover:text-primary-color dark:hover:text-primary-color duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="dark:text-white text-zinc-600 hover:text-primary-color dark:hover:text-primary-color duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="dark:text-white text-zinc-600 hover:text-primary-color dark:hover:text-primary-color duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className="dark:text-white text-zinc-600 hover:text-primary-color dark:hover:text-primary-color duration-300"
              >
                Photos
              </Link>
            </li>
          </ul>
        </nav>

        <Theme />
      </div>
    </header>
  );
}
