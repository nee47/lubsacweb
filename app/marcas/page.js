import Link from "next/link";
import getData from "@/app/lib/getData";
import { BRAND_CONFIG } from "./brandConfig";

export default async function Page() {
  const products = await getData("data.json");

  const brandsWithCount = BRAND_CONFIG.map((brand) => {
    const count = products.filter(
      (p) => p.brand.toLowerCase() === brand.dataBrand,
    ).length;
    return { ...brand, count };
  });

  return (
    <>
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">
          Marcas
        </h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Selecciona una marca para ver todo su catalogo de productos.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandsWithCount.map((brand) => (
          <Link key={brand.slug} href={`/marcas/${brand.slug}`}>
            <article className="group bg-white border border-neutral-200 p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
              <span className="block h-1 w-full bg-gradient-to-r from-yellow-200 to-green-300 mb-2 rounded-md"></span>
              <h2 className="text-2xl font-bold text-neutral-800 group-hover:text-yellow-600 mb-3">
                {brand.name}
              </h2>
              <p className="text-sm text-neutral-500 min-h-[66px]">
                {brand.description}
              </p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-neutral-400 font-medium">
                  {brand.count} Productos
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
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
