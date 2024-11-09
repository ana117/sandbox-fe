import type { JSX } from "preact/jsx-runtime";

export default function Masonry(
  props: Readonly<{ childrens: JSX.Element[]; columns: number; gap: number }>,
) {
  const { childrens, columns, gap } = props;

  const style = `
          .masonry {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: ${gap}px;
            grid-auto-rows: 10px;
          }
          
          @media (min-width: 640px) {
            .masonry {
              grid-template-columns: repeat(${Math.min(columns, 2)}, 1fr);
            }
          }

          @media (min-width: 768px) {
            .masonry {
              grid-template-columns: repeat(${Math.min(columns, 3)}, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .masonry {
              grid-template-columns: repeat(${columns}, 1fr);
            }
          }
        `;

  return (
    <>
      <style>
        {style}
      </style>

      <div className="masonry">
        {childrens}
      </div>
    </>
  );
}
