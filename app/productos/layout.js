import TabBar from "../Components/TabBar";
import Link from "next/link";

export default function categoryLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full  py-12 px-16 md:px-44 bg-[url(../public/nrg_bg2.jpg)] bg-[cover] ">
        <div className="text-white w-fit p-6 rounded-md bg-black/50 backdrop-blur-sm ">
          <h1 className=" text-2xl font-bold my-2 px-4  ">GAMA DE PRODUCTOS</h1>
          <p className="text-base md:text-lg px-4 max-w-2xl">
            Usando el lubricante adecuado puede lograr un gran ahorro y, a la
            vez maximizar la eficiencia de su maquinaria, prolongar la
            productividad de su negocio y reducir el tiempo fuera de servicio.{" "}
          </p>
        </div>
      </section>

      <div className="bg-[url(../public/bgc.jpg)] gap-y-6 flex flex-col items-center size-full py-[10%]">
        <TabBar></TabBar>

        {children}

        <div className=" flex flex-col items-center gap-y-6  py-20 mx-4">
          <h3 className="font-bold text-white">
            ¿NECESITA UN PRODUCTO ESPECÍFICO O ALGÚN EQUIVALENTE?
          </h3>
          <Link href="/contacto">
            <p className=" text-sm  text-center w-32 px-4 py-2 bg-yellow-300  hover:bg-yellow-400 ">
              Contáctenos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
