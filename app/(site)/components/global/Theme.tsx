"use client";
import { useState } from "react";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";

export default function Theme() {
  const [theme, setTheme] = useState<String>("dark");
  const isLight: boolean = theme === "light";

  function toggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setTheme("light");
      // setTheme(`${window.localStorage.getItem("theme")}`);
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  // CSS
  // css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class
  // // Select the button
  // const btn = document.querySelector(".btn-toggle");
  // // Check for dark mode preference at the OS level
  // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // // Get the user's theme preference from local storage, if it's available
  // const currentTheme = localStorage.getItem("theme");
  // // If the user's preference in localStorage is dark...
  // if (currentTheme == "dark") {
  //   // ...let's toggle the .dark-theme class on the body
  //   document.body.classList.toggle("dark-mode");
  //   // Otherwise, if the user's preference in localStorage is light...
  // } else if (currentTheme == "light") {
  //   // ...let's toggle the .light-theme class on the body
  //   document.body.classList.toggle("light-mode");
  // }

  // // Listen for a click on the button
  // btn.addEventListener("click", function () {
  //   // If the user's OS setting is dark and matches our .dark-mode class...
  //   if (prefersDarkScheme.matches) {
  //     // ...then toggle the light mode class
  //     document.body.classList.toggle("light-mode");
  //     // ...but use .dark-mode if the .light-mode class is already on the body,
  //     var theme = document.body.classList.contains("light-mode")
  //       ? "light"
  //       : "dark";
  //   } else {
  //     // Otherwise, let's do the same thing, but for .dark-mode
  //     document.body.classList.toggle("dark-mode");
  //     var theme = document.body.classList.contains("dark-mode")
  //       ? "dark"
  //       : "light";
  //   }
  //   // Finally, let's save the current preference to localStorage to keep using it
  //   localStorage.setItem("theme", theme);
  // });

  https: return (
    <div>
      <button
        onClick={toggleTheme}
        className={`dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 rounded-full p-2 duration-300 transition-transform text-xl ${
          isLight ? "-rotate-180" : "rotate-0"
        }`}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
