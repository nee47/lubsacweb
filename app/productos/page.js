// productos/page.js
import getData from "../lib/getData";
import Link from "next/link";

export default async function Page() {
  const products = await getData("data.json");
  const cats = await getData("categorias.json");

  console.log(cats);

  // Group by alias, deduplicate using a Map to ensure uniqueness
  const industriesMap = new Map();

  for (const p of products) {
    const key = p.alias.toLowerCase().trim();
    industriesMap.set(key, (industriesMap.get(key) || 0) + 1);
  }

  // Convert to array and sort by name
  const industriesArray = Array.from(industriesMap.entries())
    .map(([alias, count]) => ({
      alias,
      count,
    }))
    .sort((a, b) => a.alias.localeCompare(b.alias));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">
          Catalogo de Productos
        </h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Soluciones de alta ingenieria para mantenimiento industrial, grado
          alimenticio y procesos especiales.
        </p>
      </header>

      {industriesArray.length === 0 ? (
        <p className="text-center text-neutral-400 text-lg">
          No hay categorias disponibles.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesArray.map(({ alias, count }) => (
            <Link key={alias} href={`/productos/${alias}`}>
              <div className="group bg-white border border-neutral-200 p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold capitalize h-16 text-neutral-800 group-hover:text-yellow-600">
                  {alias.replaceAll("-", " ")}
                </h3>
                <div className="flex justify-between pt-10 items-center h-full ">
                  <span className="text-neutral-400 font-medium">
                    {count} Productos
                  </span>
                  <span className="bg-neutral-50 group-hover:bg-yellow-100 p-2 rounded-full transition-colors">
                    <svg
                      className="w-5 h-5 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
