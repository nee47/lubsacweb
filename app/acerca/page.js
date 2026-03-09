import Image from "next/image";
import petro from "@/public/petro_canada.webp";
import ngr from "@/public/ngr.webp";
import exp from "@/public/exp.jpg";

function page() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO — Quiénes Somos */}
      <section className="relative w-full py-20 px-8 md:px-[15%] overflow-hidden border-b border-gray-100">
        {/* Background subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-yellow-300" />
            <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
              Sobre Nosotros
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            Líderes en{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Lubricación Industrial</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0 opacity-60" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            <strong className="text-gray-900">
              LUBRICANTES ESPECIALES DEL PERÚ SAC
            </strong>{" "}
            <span className="inline-flex items-center gap-1 text-sm bg-yellow-50 border border-yellow-200 text-yellow-700 font-mono px-2 py-0.5 rounded mx-1">
              RUC 20523985842
            </span>{" "}
            es uno de los principales distribuidores de lubricantes industriales
            del país. Operamos en los sectores de{" "}
            <span className="text-gray-900 font-medium">
              Minería, Transporte, Industria, Construcción, Pesca, Metalmecánica
              y Textil
            </span>
            , respaldando la generación de bienes y servicios con productos de
            la más alta calidad técnica.
          </p>
        </div>
      </section>

      {/* MARCAS */}
      <section className="w-full py-16 px-8 md:px-[15%] bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-10 bg-yellow-300" />
          <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
            Nuestras Marcas
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Logos */}
          <div className="flex flex-wrap items-center justify-start gap-8 md:gap-10">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-200">
              <Image
                src={petro}
                alt="Petro Canada"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-200">
              <Image
                src={ngr}
                alt="NRG Oil"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-200">
              <Image
                src="/q7.jpg"
                alt="Q7 Oils"
                width={96}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 border-l-0 md:border-l border-gray-200 md:pl-10">
            <p className="text-gray-700 leading-relaxed mb-3">
              Distribuimos{" "}
              <strong className="text-gray-900">
                NRG OIL, PETROCANADA (Canadá), Q7 (Perú)
              </strong>{" "}
              y <strong className="text-gray-900">Antiseize (EE. UU.)</strong> —
              marcas con portafolios completos de lubricantes de última
              generación.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aceites y grasas sintéticos, semi-sintéticos, sanitarios y
              biodegradables para cada necesidad industrial.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="w-full py-16 px-8 md:px-[15%]">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-10 bg-yellow-300" />
          <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
            Servicios Técnicos
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Imagen */}
          <div className="relative md:w-80 flex-shrink-0">
            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-yellow-300 rounded-lg" />
            <Image
              src={exp}
              alt="Más de 15 años de experiencia"
              className="relative rounded-lg w-full h-auto object-cover shadow-md"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-300 text-gray-900 font-black text-sm px-3 py-1.5 rounded tracking-wide shadow">
              +15 AÑOS DE EXPERIENCIA
            </div>
          </div>

          {/* Lista de servicios */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "⚙️",
                title: "Asesoría Técnica Especializada",
                desc: "Ingenieros especializados para la correcta selección y uso de lubricantes en cada aplicación.",
              },
              {
                icon: "📋",
                title: "Guías de Lubricación",
                desc: "Documentación técnica personalizada para sus maquinarias y equipos productivos.",
              },
              {
                icon: "🔬",
                title: "Diagnóstico de Equipos",
                desc: "Análisis de muestras de aceite en uso para detectar fallas y optimizar la vida útil.",
              },
              {
                icon: "♻️",
                title: "Gestión de Residuos",
                desc: "Certificación oficial de eliminación de residuos con cumplimiento normativo.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-yellow-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 h-0.5 w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
