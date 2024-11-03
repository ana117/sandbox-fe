import NavCard from "../components/NavCard.tsx";

export default function Home() {
  return (
    <div class="grow flex flex-wrap justify-center gap-16 w-fit mx-auto">
      <NavCard
        url="/cards"
        title="Cards"
        description="Various card components"
        image="cards.jpg"
      />
    </div>
  );
}
