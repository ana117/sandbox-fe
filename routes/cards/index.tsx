import { Head } from "$fresh/runtime.ts";
import Card from "../../components/cards/Card.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";
import Separator from "../../components/Separator.tsx";
import { generateCodeSnippet } from "../../utils/code_generator.ts";
import NavCard from "../../components/cards/NavCard.tsx";

export default function CardsPage() {
  const frontComponent = (
    <div className="h-full w-full p-4 flex flex-col gap-2 bg-primary rounded-lg">
      <h3>Front</h3>
      <p>This is the front of the card</p>
    </div>
  );
  const backComponent = (
    <div className="h-full w-full p-4 flex flex-col gap-2 bg-primary rounded-lg">
      <h3>Back</h3>
      <p>This is the back of the card</p>
    </div>
  );
  const oneComponentOnly = (
    <div className="h-full w-full p-4 flex flex-col gap-2 bg-primary rounded-lg">
      <h3>Single Component</h3>
      <p>This card only has one component</p>
    </div>
  );

  const cardCode = generateCodeSnippet("./components/cards/Card.tsx");
  const navCardCode = generateCodeSnippet("./components/cards/NavCard.tsx");

  return (
    <>
      <Head>
        <title>Cards</title>
      </Head>

      <div className={"grow flex flex-col gap-16"}>
        <div id="card" className="border border-primary rounded-lg p-4">
          <h3 className={"text-xl font-bold"}>
            Card
          </h3>
          <Separator />
          <div className="grid grid-cols-3">
            <div className="pe-4 col-span-2 border-e border-primary">
              <code className={"whitespace-pre-wrap"}>
                <CodeBlock code={cardCode} />
              </code>
            </div>

            <div
              className={"ps-4 border-s border-primary flex flex-col items-center justify-around gap-4"}
            >
              <Card component={frontComponent} backComponent={backComponent} />
              <Card component={oneComponentOnly} />
            </div>
          </div>
        </div>

        <div
          id="navigation-card"
          className="border border-primary rounded-lg p-4"
        >
          <h3 className={"text-xl font-bold"}>
            Navigation Card
          </h3>
          <Separator />
          <div className="grid grid-cols-3">
            <div className="pe-4 col-span-2 border-e border-primary">
              <code className={"whitespace-pre-wrap"}>
                <CodeBlock code={navCardCode} />
              </code>
            </div>

            <div
              className={"ps-4 border-s border-primary flex flex-col items-center justify-around gap-4"}
            >
              <NavCard
                url="#navigation-card"
                title="NavCards"
                description="NavCard with image"
                image="cards.jpg"
              />
              <NavCard
                url="#navigation-card"
                title="NavCards (No Image)"
                description="NavCard without image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
