export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
      <img src="public/logo.png" className="h-10" />

      <div className="flex flex-wrap gap-3">
        <button className="bg-gray-800 px-3 py-1 rounded">Latest</button>
        <button className="bg-gray-800 px-3 py-1 rounded">Collections</button>
        <button className="bg-gray-800 px-3 py-1 rounded">Deals</button>
        <button className="bg-gray-800 px-3 py-1 rounded">Subscriptions</button>
        <button className="bg-gray-800 px-3 py-1 rounded">Browse</button>
        <button className="bg-gray-800 px-3 py-1 rounded">Catalog</button>
      </div>
      
      <input
        placeholder="Search"
        className="bg-green-800 px-3 py-1 rounded"
      />
    </nav>
  );
}
