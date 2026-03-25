// productos/[industria]/page.js
import getData from "@/app/lib/getData";
import CategoryByBrand from "@/app/Components/CategoryByBrand";
import FilterSidebar from "@/app/Components/FilterSidebar";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { industria } = params;
  const label = industria.replaceAll("-", " ");
  return {
    title: `${label.charAt(0).toUpperCase() + label.slice(1)} | Catálogo LUBSAC`,
    description: `Productos de lubricación industrial para la industria de ${label}. Filtra por marca y encuentra la solución adecuada.`,
  };
}

export default async function Page({ params, searchParams }) {
  const { industria } = params;
  const selectedBrand = searchParams?.marca;

  const allProducts = await getData("data.json");

  // 1. Filter by industry (normalize to avoid case/whitespace mismatches)
  const industryProducts = allProducts.filter(
    (p) => p.alias.toLowerCase().trim() === industria.toLowerCase().trim(),
  );
  if (industryProducts.length === 0) redirect("/404");

  // 2. Unique brands in this industry
  const availableBrands = [...new Set(industryProducts.map((p) => p.brand))];

  // 3. Counts per brand from FULL industry list (unaffected by active brand filter)
  const brandCounts = industryProducts.reduce((acc, p) => {
    const key = p.brand.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // 4. Filter by brand if selected
  const filteredProducts = selectedBrand
    ? industryProducts.filter(
        (p) => p.brand.toLowerCase() === selectedBrand.toLowerCase(),
      )
    : industryProducts;

  // 5. Always sort by product name
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <Link
        href="/productos"
        className="inline-flex items-center gap-2 px-4 py-2 mb-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Volver a productos
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <FilterSidebar
            brands={availableBrands}
            activeBrand={selectedBrand}
            brandCounts={brandCounts}
            totalResults={industryProducts.length}
          />
        </aside>

        <article className="flex-1">
          <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold capitalize text-neutral-900">
                {industria.replaceAll("-", " ")}
              </h1>
              <p className="text-neutral-500 mt-2">
                Mostrando {sortedProducts.length} soluciones industriales
              </p>
            </div>
          </header>

          <CategoryByBrand category={industria} productos={sortedProducts} />
        </article>
      </div>
    </div>
  );
}
