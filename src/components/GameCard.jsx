export default function GameCard({ title, price, image }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden w-full">
      <div className="w-full aspect-[16/9]">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="p-3 flex justify-between items-end">
        <div>
          <h3 className="text-base sm:text-lg">{title}</h3>
          <p className="text-gray-400">{price}</p>
        </div>

        <div className="flex gap-2">
          <img src="public/icons/steam.png" className="w-8 h-8" />
          <img src="public/icons/epic_games.png" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
