import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    "Optimización y reducción del consumo de lubricantes.",
    "Actualización y gestión de cartillas de lubricación.",
    "Asesoramiento técnico para la correcta selección y uso de lubricantes.",
    "Servicio de entrega rápida a domicilio en Lima.",
    "Envíos a provincias a nivel nacional.",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[350px] flex items-center justify-center text-center">
        <Image
          src="/categories/turbina_hidraulica.jpg"
          fill
          className="object-cover brightness-50"
          alt="Servicios lubricantes industriales"
        />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Servicios Especializados
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            En{" "}
            <span className="font-semibold">
              Lubricantes Especiales del Perú{" "}
            </span>
            ofrecemos soluciones integrales de lubricación industrial enfocadas
            en mejorar el rendimiento de sus equipos y optimizar costos
            operativos.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          ¿Cómo generamos valor para su empresa?
        </h2>

        <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
          Nuestro programa integral de análisis y gestión de lubricación está
          diseñado para maximizar la eficiencia de sus operaciones, reducir
          costos de mantenimiento y prolongar la vida útil de sus equipos
          industriales.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-yellow-300 rounded-lg flex items-center justify-center mb-4 font-bold">
                ✓
              </div>

              <p className="text-slate-700 leading-relaxed">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTING SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-14 items-center">
        <Image
          src="/asesoria.webp"
          width={500}
          height={600}
          alt="Asesoría en lubricación industrial"
          className="rounded-xl shadow-md"
        />

        <div>
          <h3 className="text-2xl font-bold text-slate-800">
            Asesoría técnica especializada
          </h3>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Nuestro equipo brinda asesoría técnica para identificar las mejores
            soluciones de lubricación según las condiciones de operación de sus
            equipos. Analizamos cada aplicación para recomendar productos que
            optimicen el rendimiento y reduzcan el desgaste mecánico.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Trabajamos con lubricantes de alto desempeño diseñados para sectores
            exigentes como minería, transporte, industria, construcción y
            metalmecánica.
          </p>

          <Link
            href="/contacto"
            className="mt-8 inline-block bg-yellow-300 hover:bg-yellow-400 transition px-6 py-3 rounded-lg font-semibold"
          >
            Solicitar asesoría
          </Link>
        </div>
      </section>
    </div>
  );
}
