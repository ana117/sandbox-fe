import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col text-text bg-background transition-colors duration-500">
      <Navbar />
      <div className="flex grow p-8">
        <Component />
      </div>
    </div>
  );
}
