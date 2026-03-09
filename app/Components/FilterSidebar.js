"use client";
// Components/FilterSidebar.js
import Link from "next/link";

export default function FilterSidebar({
  brands,
  activeBrand,
  brandCounts,
  totalResults,
}) {
  const formatBrandName = (name) => {
    if (name.toLowerCase() === "petrocanada") return "Petro-Canada";
    return name.toUpperCase();
  };

  const buildHref = (brand) => {
    const params = new URLSearchParams();
    if (brand) params.set("marca", brand.toLowerCase());
    const qs = params.toString();
    return qs ? `?${qs}` : "?";
  };

  return (
    <div className="sticky top-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
        Filtrar por Marca
      </h2>

      <div className="flex flex-col gap-2">
        <Link
          href={buildHref(null)}
          className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex justify-between items-center ${
            !activeBrand
              ? "bg-yellow-400 text-neutral-900 shadow-sm"
              : "bg-white border border-neutral-100 text-neutral-500 hover:border-yellow-200"
          }`}
        >
          <span>Ver Todo</span>
          <span
            className={`text-xs font-bold tabular-nums ${!activeBrand ? "text-neutral-700" : "text-neutral-400"}`}
          >
            {totalResults}
          </span>
        </Link>

        {brands.map((brand) => {
          const count = brandCounts?.[brand.toLowerCase()] ?? 0;
          const isActive = activeBrand?.toLowerCase() === brand.toLowerCase();

          return (
            <Link
              key={brand}
              href={buildHref(brand)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex justify-between items-center ${
                isActive
                  ? "bg-yellow-400 text-neutral-900 shadow-sm"
                  : "bg-white border border-neutral-100 text-neutral-500 hover:border-yellow-200"
              }`}
            >
              <span>{formatBrandName(brand)}</span>
              <span
                className={`text-xs font-bold tabular-nums ${
                  isActive
                    ? "text-neutral-700"
                    : count === 0
                      ? "text-neutral-300"
                      : "text-neutral-400"
                }`}
              >
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
