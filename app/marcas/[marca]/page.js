import Link from "next/link";
import { redirect } from "next/navigation";
import CategoryByBrand from "@/app/Components/CategoryByBrand";
import getData from "@/app/lib/getData";
import { BRAND_CONFIG, getBrandBySlug } from "../brandConfig";

export default async function Page({ params }) {
  const selected = getBrandBySlug(params.marca);
  if (!selected) redirect("/404");

  const products = await getData("data.json");

  const filteredProducts = products
    .filter((p) => p.brand.toLowerCase() === selected.dataBrand)
    .sort((a, b) => a.name.localeCompare(b.name));

  const counts = BRAND_CONFIG.reduce((acc, brand) => {
    acc[brand.slug] = products.filter(
      (p) => p.brand.toLowerCase() === brand.dataBrand,
    ).length;
    return acc;
  }, {});

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <aside className="w-full md:w-72 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Filtrar por Marca
          </h2>

          <div className="flex flex-col gap-2">
            {BRAND_CONFIG.map((brand) => {
              const isActive = brand.slug === selected.slug;

              return (
                <Link
                  key={brand.slug}
                  href={`/marcas/${brand.slug}`}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex justify-between items-center ${
                    isActive
                      ? "bg-yellow-400 text-neutral-900 shadow-sm"
                      : "bg-white border border-neutral-100 text-neutral-500 hover:border-yellow-200"
                  }`}
                >
                  <span>{brand.name}</span>
                  <span
                    className={`text-xs font-bold tabular-nums ${
                      isActive ? "text-neutral-700" : "text-neutral-400"
                    }`}
                  >
                    {counts[brand.slug]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <header className="mb-8">
          <Link
            href="/marcas"
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            &larr; Volver a marcas
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">{selected.name}</h1>
          <p className="text-neutral-500 mt-2">{selected.description}</p>
          <p className="text-neutral-500 mt-1">Mostrando {filteredProducts.length} productos</p>
        </header>

        <CategoryByBrand category={selected.slug} productos={filteredProducts} />
      </main>
    </div>
  );
}

