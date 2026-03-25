// productos/page.js
import getData from "../lib/getData";
import Link from "next/link";

export const metadata = {
  title: "Catálogo de Productos | LUBSAC",
  description:
    "Explora nuestras líneas de productos industriales: lubricantes, grasas y aceites de alta calidad para todo tipo de industria.",
};

// A subtle icon for each card — using a gear/cog motif fitting industrial context
function IndustryIcon() {
  return (
    <svg
      className="w-8 h-8 text-yellow-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default async function Page() {
  const products = await getData("data.json");

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
    <div className="min-h-screen bg-neutral-50">
      {/* Hero header */}
      <div className="bg-neutral-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-yellow-400 text-neutral-900 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            Catálogo Industrial
          </span>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Líneas de Productos
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Soluciones de alta ingeniería para mantenimiento industrial, grado
            alimenticio y procesos especiales.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm text-neutral-500">
            <span>
              <span className="text-yellow-400 font-bold text-2xl">
                {industriesArray.length}
              </span>{" "}
              Categorías
            </span>
            <span>
              <span className="text-yellow-400 font-bold text-2xl">
                {products.length}
              </span>{" "}
              Productos
            </span>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {industriesArray.length === 0 ? (
          <p className="text-center text-neutral-400 text-lg">
            No hay categorias disponibles.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesArray.map(({ alias, count }) => (
              <Link key={alias} href={`/productos/${alias}`}>
                <div className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-500" />

                  <div className="p-7">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                        <IndustryIcon />
                      </div>
                      <span className="text-xs font-bold bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full tabular-nums">
                        {count} {count === 1 ? "producto" : "productos"}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-extrabold capitalize text-neutral-900 group-hover:text-yellow-600 transition-colors leading-snug mb-2">
                      {alias.replaceAll("-", " ")}
                    </h3>

                    {/* Divider */}
                    <div className="border-t border-neutral-100 mt-5 pt-5 flex items-center justify-between">
                      <span className="text-sm text-neutral-400 font-medium">
                        Ver soluciones
                      </span>
                      <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-yellow-400 flex items-center justify-center transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
