import ContactCard from "../Components/ContactCard";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="font-bold text-2xl  w-full text-center bg-slate-300 py-6">
        Contacto
      </h1>

      <div className="flex items-center  gap-x-4 bg-white max-w-sm rounded-sm ">
        <Image className=" h-32 w-auto rounded-sm" src={logo} alt="LUBESAC" />
        <div className=" text-xl max-w-56 font-medium text-black leading-5">
          <span className="font-bold">Lubricantes</span> Especiales del Perú
        </div>
      </div>
      <section className="py-10">
        <ContactCard
          title="Oficina Principal"
          desc="Jirón Bulgaria N.º 335-402 Urb. San Elias-Los Olivos"
          bg={"bg-yellow-300/30"}
        />

        <ContactCard
          title="Email"
          desc="oilxxfm@yahoo.es"
          bg={"bg-gray-300/30"}
        />

        <ContactCard title="RUC" desc="20523985842" bg={"bg-yellow-300/30"} />

        <ContactCard
          title="Teléfono"
          desc="+51 981366304 | +51 961484883"
          bg={"bg-gray-300/30"}
        />
      </section>
    </div>
  );
}
