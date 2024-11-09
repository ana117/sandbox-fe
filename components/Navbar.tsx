import ThemeToggler from "../islands/ThemeToggler.tsx";

export default function Navbar() {
  return (
    <nav className="h-16 content-center text-center bg-background border-b-4 border-primary/50 relative">
      <a
        href="/"
        className="mx-auto flex items-center w-fit h-full font-bold text-text align-middle -mb-2 border-b-4 border-b-transparent hover:border-b-primary"
      >
        Sandbox Frontend Edition
      </a>

      <div className={"absolute top-0 right-4 h-full content-center"}>
        <ThemeToggler />
      </div>
    </nav>
  );
}
