import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="m-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" className="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
