export default function Hero() {
  return (
    <div className="w-full h-[250px] md:h-[350px] bg-[url('/games/elden_ring_deluxe.jpg')] bg-cover bg-center rounded-xl relative">
      <div className="absolute bottom-0 left-0 bg-black/70 w-full p-6 rounded-b-xl">
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          Elden Ring Deluxe Edition
        </h1>

        <button className="bg-green-500 px-4 py-2 mt-2 rounded">
          BUY KEY
        </button>
      </div>
    </div>
  );
}
