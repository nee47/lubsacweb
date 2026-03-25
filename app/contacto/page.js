import ContactCard from "../Components/ContactCard";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";
import WhatsAppButton from "../Components/WhatsappButton";

export const metadata = {
  title: "Contacto | LUBSAC",
  description:
    "Contáctanos para cotizaciones, consultas técnicas o información sobre nuestros lubricantes industriales. Oficinas en Los Olivos y Santa Anita, Lima.",
};

export default function page() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <section className="relative w-full py-16 px-8 md:px-[15%] border-b border-gray-100 overflow-hidden">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-yellow-300" />
              <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
                Contáctanos
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Estamos para{" "}
              <span className="relative inline-block">
                <span className="relative z-10">ayudarte</span>
              </span>
            </h1>
            <p className="mt-3 text-gray-500 text-base max-w-md">
              Contáctanos por cualquier consulta técnica, cotización o
              información sobre nuestros productos.
            </p>
          </div>

          {/* Logo card */}
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 shadow-sm w-fit">
            <Image
              className="h-16 w-auto rounded-lg"
              src={logo}
              alt="Logo Lubricantes Especiales del Perú SAC"
            />
            <div className="text-sm font-medium text-gray-700 leading-snug max-w-[160px]">
              <span className="font-black text-gray-900 text-base">
                Lubricantes
              </span>
              <br />
              Especiales del Perú S.A.C.
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 px-8 md:px-[15%] py-14">
        {/* Ubicaciones e info */}
        <section className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-yellow-300" />
            <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
              Ubicaciones
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                icon: "🏢",
                title: "Oficina",
                desc: "Calle Bulgaria N.º 335, dpto 402 Urb. San Elias — Los Olivos",
              },
              {
                icon: "🏭",
                title: "Planta",
                desc: "Zona Industrial, Santa Anita",
              },
              {
                icon: "📦",
                title: "Almacén",
                desc: "Jr. Santa Cruz de Pachacutec 270, Los Olivos",
              },
              {
                icon: "✉️",
                title: "Email",
                desc: "oilxxfm@yahoo.es",
                mono: true,
              },
              {
                icon: "🪪",
                title: "RUC",
                desc: "20523985842",
                mono: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-yellow-300 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-lg mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-0.5">
                    {item.title}
                  </p>
                  <p
                    className={`text-gray-800 text-sm leading-snug ${item.mono ? "font-mono" : ""}`}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="ml-auto h-full self-stretch w-0.5 w-0 bg-yellow-300 group-hover:w-0.5 transition-all duration-200 rounded" />
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp */}
        <section className="md:w-72 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-yellow-300" />
            <span className="text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
              WhatsApp
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4 h-fit">
            <p className="text-sm text-gray-500 leading-relaxed">
              Escríbenos directamente y te responderemos a la brevedad.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Francisco
                </span>
                <WhatsAppButton number="51981366304" name="Francisco" />
              </div>
              <div className="w-full h-px bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Alejandro
                </span>
                <WhatsAppButton number="51961484883" name="Alejandro" />
              </div>
            </div>

            <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
              <p className="text-xs font-bold text-yellow-700 tracking-widest uppercase mb-1">
                Teléfonos
              </p>
              <p className="text-sm font-mono text-gray-700">+51 981 366 304</p>
              <p className="text-sm font-mono text-gray-700">+51 961 484 883</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
