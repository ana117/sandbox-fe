import { useSignal } from "@preact/signals";
import { Copy } from "../components/Icons.tsx";

export default function CodeBlock(props: Readonly<{ code: string }>) {
  const clickedState = useSignal(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.code);
    clickedState.value = true;
    setTimeout(() => {
      clickedState.value = false;
    }, 1000);
  };

  return (
    <div className="relative">
      <code className={"whitespace-pre-wrap"}>
        {props.code}
      </code>
      <button
        onClick={copyToClipboard}
        className={`absolute top-0 right-0 p-2 duration-500 ${
          clickedState.value ? "bg-white rounded-full" : "bg-transparent"
        }`}
      >
        <Copy className="w-10 h-10 fill-primary" />
      </button>
    </div>
  );
}
