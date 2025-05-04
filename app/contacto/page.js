import ContactCard from "../Components/ContactCard";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";
import WhatsAppButton from "../Components/WhatsappButton";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="font-bold text-4xl  w-full text-center  py-6">Contacto</h1>

      <div className="flex items-center  gap-x-4 bg-white max-w-sm rounded-sm ">
        <Image
          className=" h-32 w-auto rounded-sm animate-pulse"
          src={logo}
          alt="Logo lubricantes especiales del perú sac"
        />
        <div className=" text-xl max-w-56 font-medium text-black leading-5">
          <span className="font-bold">Lubricantes</span> Especiales del Perú
          S.A.C.
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-10 ">
        <section className="">
          <ContactCard
            title="Oficina"
            desc="Calle Bulgaria N.º 335, dpto 402 Urb. San Elias-Los Olivos"
            bg={"bg-yellow-300/30"}
          />

          <ContactCard
            title="Planta"
            desc="Zona industrial, Santa anita"
            bg={"bg-yellow-300/30"}
          />
          <ContactCard
            title="Almacén"
            desc="Jr Santa cruz de Pachacutec 270, Los Olivos"
            bg={"bg-yellow-300/30"}
          />
          <ContactCard
            title="Email"
            desc="oilxxfm@yahoo.es"
            bg={"bg-gray-300/30"}
          />

          <ContactCard title="RUC" desc="20523985842" bg={"bg-yellow-300/30"} />
        </section>

        <section className="bg-green-400 p-4 rounded-md h-fit">
          <h2 className="font-bold">Escribenos al Whatsapp</h2>

          <WhatsAppButton number="51981366304" name="Francisco" />

          <WhatsAppButton number="51961484883" name="Alejandro" />
          <ContactCard
            title="Teléfonos"
            desc="+51 981366304 | +51 961484883"
            bg={"bg-gray-300/30"}
          />
        </section>
      </div>
    </div>
  );
}
