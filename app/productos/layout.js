import FadeUp from "../Components/FadeUpComp";
import TabBar from "../Components/TabBar";
import Link from "next/link";
import Image from "next/image";

export default function categoryLayout({ children }) {
  return (
    <div className="flex flex-col pt-20">
      <section className="flex flex-wrap items-center w-full py-12 px-16 md:px-44 bg-black border-b border-b-yellow-800">
        <div className="w-fit p-6 rounded-md max-w-[600px]">
          <h1 className=" text-yellow-300 text-3xl font-extrabold my-2 px-4  ">
            GAMA DE PRODUCTOS
          </h1>
          <p className="text-zinc-300 mt-4 md:text-lg px-4 max-w-2xl">
            Usando el lubricante adecuado puede lograr un gran ahorro y, a la
            vez maximizar la eficiencia de su maquinaria, prolongar la
            productividad de su negocio y reducir el tiempo fuera de
            servicio.{" "}
          </p>
        </div>

        <div className=" ">
          <FadeUp>
            <Image
              src="/categories/perforacion_neumatica.webp"
              width={480}
              height={90}
              alt="Product image"
              className="h-auto"
            />
          </FadeUp>
        </div>
      </section>

      <div className="flex flex-col px-4 md:px-40 gap-y-6 py-[10%]">
        <TabBar />

        {children}

        <div className="flex flex-col items-center gap-y-6 gap-x-8 py-16 px-6 mt-24 mx-4 bg-zinc-900 border-l-4 border-l-yellow-500">
          <div className="max-w-[600px]">
            <h3 className="font-bold text-white text-xl">
              ¿NECESITA UN PRODUCTO ESPECÍFICO O ALGÚN EQUIVALENTE?
            </h3>

            <p className="text-zinc-400 text-sm mt-2">
              Nuestro equipo técnico puede ayudarle a encontrar la solución
              ideal para su operación.
            </p>
          </div>

          <Link href="/contacto">
            <p className=" text-sm  text-center w-64 px-2 py-4 bg-yellow-500  hover:bg-yellow-400 ">
              Contáctenos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
