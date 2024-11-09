import { Head } from "$fresh/runtime.ts";
import Masonry from "../../components/masonry/Masonry.tsx";
import Separator from "../../components/Separator.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";
import { generateCodeSnippet } from "../../utils/code_generator.ts";

export default function MasonryPage() {
  const childrens = [
    <div className="bg-primary p-4 rounded-lg row-span-5">
      <h3 className="text-lg font-semibold">Card 1</h3>
      <p>This is the first card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-9">
      <h3 className="text-lg font-semibold">Card 2</h3>
      <p>This is the second card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-7">
      <h3 className="text-lg font-semibold">Card 3</h3>
      <p>This is the third card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-8">
      <h3 className="text-lg font-semibold">Card 4</h3>
      <p>This is the fourth card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-6">
      <h3 className="text-lg font-semibold">Card 5</h3>
      <p>This is the fifth card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-6">
      <h3 className="text-lg font-semibold">Card 6</h3>
      <p>This is the sixth card</p>
    </div>,
    <div className="bg-primary p-4 rounded-lg row-span-10">
      <h3 className="text-lg font-semibold">Card 7</h3>
      <p>This is the seventh card</p>
    </div>,
  ];

  const masonryCode = generateCodeSnippet("./components/masonry/Masonry.tsx");

  return (
    <>
      <Head>
        <title>Masonry</title>
      </Head>

      <div className={"grow flex flex-col gap-8"}>
        <div id="card" className="border border-primary rounded-lg p-4">
          <h3 className={"text-xl font-bold"}>
            Masonry Layout
          </h3>
          <Separator />
          <div className="flex flex-col gap-8">
            <div>
              <Masonry columns={4} gap={16} childrens={childrens} />
            </div>

            <Separator />

            <div>
              <code className={"whitespace-pre-wrap"}>
                <CodeBlock code={masonryCode} />
              </code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
