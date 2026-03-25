import Image from "next/image";
import bases1 from "@/public/bases1.jpg";

export const metadata = {
  title: "Bases Lubricantes | LUBSAC",
  description:
    "Aprende sobre los tipos de aceites básicos API Grupo I, II y III y el proceso de fabricación de lubricantes a partir del petróleo crudo.",
};

// API group data
const apiGroups = [
  {
    group: "Grupo I",
    label: "API Grupo I",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    description:
      "Aceites minerales convencionales obtenidos por destilación y refinación con solvente. Base de la lubricación clásica.",
    specs: [
      { label: "Índice de viscosidad", value: "80 – 120" },
      { label: "Azufre", value: "> 0.03%" },
      { label: "Saturados", value: "< 90%" },
    ],
  },
  {
    group: "Grupo II",
    label: "API Grupo II",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
    description:
      "Producidos mediante hidrocraqueo y desparafinado catalítico. Mayor pureza, mejor estabilidad oxidativa.",
    specs: [
      { label: "Índice de viscosidad", value: "80 – 120" },
      { label: "Azufre", value: "≤ 0.03%" },
      { label: "Saturados", value: "≥ 90%" },
    ],
    subprocesses: [
      "Hidrocraqueo",
      "Desparafinado catalítico o hidroisomerización de cera",
      "Hidroterminado",
    ],
  },
  {
    group: "Grupo III",
    label: "API Grupo III",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    description:
      "Bases altamente refinadas mediante hidrocraqueo severo. Rendimiento cercano al sintético con excelente índice de viscosidad.",
    specs: [
      { label: "Índice de viscosidad", value: "> 120" },
      { label: "Azufre", value: "≤ 0.03%" },
      { label: "Saturados", value: "≥ 90%" },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <div className="bg-neutral-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-yellow-400 text-neutral-900 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            Ingeniería de lubricación
          </span>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Bases Lubricantes
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Entendiendo los fundamentos: tipos de aceites básicos, su
            clasificación API y el proceso de obtención a partir del petróleo
            crudo.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        {/* API Groups Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-neutral-200" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 px-2">
              Clasificación API
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apiGroups.map((g) => (
              <div
                key={g.group}
                className={`bg-gradient-to-br ${g.color} border ${g.border} rounded-2xl p-6 flex flex-col gap-4`}
              >
                <span
                  className={`self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${g.badge}`}
                >
                  {g.label}
                </span>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {g.description}
                </p>

                {g.subprocesses && (
                  <div className="bg-white/60 rounded-xl p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      Procesos
                    </p>
                    <ol className="space-y-1">
                      {g.subprocesses.map((s, i) => (
                        <li
                          key={i}
                          className="text-xs text-neutral-600 flex gap-2"
                        >
                          <span className="font-bold text-neutral-400">
                            {i + 1}.
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="mt-auto border-t border-white/60 pt-4 space-y-1">
                  {g.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between text-xs text-neutral-500"
                    >
                      <span>{s.label}</span>
                      <span className="font-bold text-neutral-700">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fabrication Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-neutral-200" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 px-2">
              Proceso de fabricación
            </h2>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
            {/* Image + title */}
            <div className="md:flex">
              <div className="md:w-56 bg-neutral-100 flex items-center justify-center p-6 flex-shrink-0">
                <Image
                  src={bases1}
                  alt="Petróleo crudo destilándose en torre de refinería"
                  className="rounded-xl object-cover w-full h-48 md:h-full"
                />
              </div>

              <div className="p-8 space-y-4 text-neutral-700 text-sm leading-relaxed">
                <h3 className="text-xl font-bold text-neutral-900">
                  Del crudo al lubricante
                </h3>
                <p>
                  El petróleo crudo es una mezcla de una amplia variedad de
                  compuestos de hidrocarburos con diferentes tamaños moleculares.
                  El tamaño de cada compuesto se determina por el número de átomos
                  de carbono enlazados con átomos de hidrógeno.
                </p>
                <p>
                  En general, cuanto más larga sea la cadena de hidrocarburos,
                  mayor será la temperatura de evaporación del compuesto.
                </p>
                <p>
                  Es a través del proceso de refinación por{" "}
                  <span className="font-semibold text-neutral-800">
                    destilación fraccionada
                  </span>{" "}
                  que el petróleo crudo se separa en sus diferentes fracciones:
                  combustibles pesados, diésel,{" "}
                  <span className="font-semibold text-yellow-600">
                    aceites básicos
                  </span>
                  , solventes y gases ligeros.
                </p>
                <p>
                  Los aceites básicos así obtenidos son purificados y mezclados
                  con aditivos para producir aceites de motor, aceites
                  hidráulicos, fluidos de transmisión y lubricantes de engranajes.
                </p>
              </div>
            </div>

            {/* Footer callout */}
            <div className="bg-neutral-900 text-white px-8 py-5">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <span className="text-yellow-400 font-bold">
                  ¿Necesitas asesoría?
                </span>{" "}
                En LUBSAC contamos con personal técnico especializado para
                ayudarte a seleccionar la base y formulación adecuada para tu
                proceso industrial.{" "}
                <a
                  href="/contacto"
                  className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300 transition-colors"
                >
                  Contáctanos
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
