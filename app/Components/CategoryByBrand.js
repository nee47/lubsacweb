import Image from "next/image";
// Components/CategoryByBrand.js

export default function CategoryByBrand({ category, productos }) {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productos.map((p, index) => (
          <article
            key={index}
            className="group flex flex-col bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex p-6 gap-6 flex-1">
              <div className="w-32 h-40 relative flex-shrink-0 bg-neutral-50 rounded-lg p-2">
                <Image
                  src={p.img || "/placeholder-oil.png"}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase rounded">
                    {p.brand}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-tight text-neutral-900 mb-3">
                  {p.name}
                </h3>

                <div className="space-y-1 mb-4">
                  {p.description?.slice(0, 2).map((d, i) => (
                    <p key={i} className="text-neutral-500 text-sm mb-4">
                      • {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer de la Card con detalles técnicos */}
            <div className="bg-neutral-50 px-6 py-4 flex justify-between items-center border-t border-neutral-100">
              <button className="text-sm font-bold text-neutral-800 hover:text-yellow-600 transition-colors"></button>
              <div className="flex gap-2">
                {p.registrations?.map((reg) => (
                  <span
                    key={reg}
                    className="text-[9px] bg-white border border-neutral-200 px-2 py-1 rounded text-neutral-600 font-bold"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
