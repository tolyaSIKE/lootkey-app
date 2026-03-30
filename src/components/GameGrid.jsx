import GameCard from "./GameCard";

export default function GameGrid() {
  const games = [
    {
      title: "Elden Ring",
      price: "€69.99",
      image: "public/games/elden_ring.jpg",
    },
    {
      title: "Death Stranding",
      price: "€49.99",
      image: "public/games/death_stranding.jpg",
    },
    {
      title: "Demon Souls",
      price: "€69.99",
      image: "public/games/demon_souls.jpg",
    },
    {
      title: "Resident Evil Village",
      price: "€69.99",
      image: "public/games/resident_evil_village.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
      {games.map((game, i) => (
        <GameCard key={i} {...game} />
      ))}
    </div>
  );
}
