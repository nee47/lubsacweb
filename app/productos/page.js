import ProductCard from "@/app/Components/ProductCard";
import c1 from "@/public/cilinder.jpg";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center ">
      <section className="w-full  bg-gray-500/30 py-12 px-16 md:px-44">
        <h1 className=" text-2xl font-bold my-2 px-4 ">GAMA DE PRODUCTOS</h1>
        <p className="text-base md:text-lg px-4 max-w-2xl">
          Usando el lubricante adecuado puede lograr un gran ahorro y, a la vez
          maximizar la eficiencia de su maquinaria, prolongar la productividad
          de su negocio y reducir el tiempo fuera de servicio.{" "}
        </p>
      </section>

      <div className=" my-14 grid md:grid-cols-3 gap-x-4 md:max-w-2xl">
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
      </div>

      <div className=" flex flex-col items-center gap-y-6  py-20">
        <h3 className="font-bold">
          ¿NECESITA UN PRODUCTO ESPECÍFICO O ALGÚN EQUIVALENTE?
        </h3>
        <Link href="/contacto">
          <p className=" text-sm w-32 px-4 py-2 bg-yellow-300  hover:bg-yellow-400 ">
            Contáctenos
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
