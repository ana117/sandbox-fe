import { useState } from "preact/hooks";
import { Moon, Sun } from "../components/Icons.tsx";

export default function ThemeToggler() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.theme = newTheme;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button className="relative block group" onClick={toggleTheme}>
      {theme === "dark"
        ? (
          <Sun
            className={"w-10 h-10 fill-primary opacity-50 group-hover:opacity-100"}
          />
        )
        : (
          <Moon
            className={"w-10 h-10 fill-primary opacity-50 group-hover:opacity-100"}
          />
        )}
    </button>
  );
}
