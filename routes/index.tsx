import NavCard from "../components/cards/NavCard.tsx";

export default function Home() {
  return (
    <div class="grow flex flex-wrap justify-center gap-16 w-fit mx-auto">
      <NavCard
        url="/cards"
        title="Cards"
        description="Various card components"
        image="cards.jpg"
      />

      <NavCard
        url="/masonry"
        title="Masonry"
        description="Masonry layout"
        image="masonry.jpg"
      />
    </div>
  );
}
