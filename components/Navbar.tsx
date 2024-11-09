import ThemeToggler from "../islands/ThemeToggler.tsx";

export default function Navbar() {
  return (
    <nav className="h-16 content-center text-center border-b-4 border-primary/50 bg-transparent relative">
      <a
        href="/"
        className="mx-auto flex items-center w-fit h-full font-bold text-text align-middle -mb-2 border-b-4 border-b-transparent hover:border-b-primary"
      >
        Sandbox Frontend Edition
      </a>
    </nav>
  );
}
