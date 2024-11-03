import type { JSX } from "preact/jsx-runtime";

export default function Card(
  props: Readonly<{ component: JSX.Element; backComponent?: JSX.Element }>,
) {
  if (props.backComponent) {
    return (
      <div className={"group h-60 w-60 [perspective:1000px]"}>
        <div
          className={"shadow-lg rounded-lg relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"}
        >
          <div
            className={"absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]"}
          >
            {props.component}
          </div>

          <div
            className={"shadow-lg rounded-lg absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]"}
          >
            {props.backComponent}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"h-60 w-60  shadow-lg rounded-lg"}>
      {props.component}
    </div>
  );
}
