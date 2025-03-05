import ProductCard from "@/app/Components/ProductCard";
import getData from "../lib/getData";

import Link from "next/link";

async function page() {
  const products = await getData("categorias.json");

  return (
    <>
      <div className=" my-14 grid md:grid-cols-3 gap-x-4 md:max-w-2xl">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            title={p.categoria}
            imgPath={p.img_src || c1}
            productPath={"productos/" + p.alias}
          />
        ))}
      </div>

      <div className=" flex flex-col items-center gap-y-6  py-20 mx-4">
        <h3 className="font-bold">
          ¿NECESITA UN PRODUCTO ESPECÍFICO O ALGÚN EQUIVALENTE?
        </h3>
        <Link href="/contacto">
          <p className=" text-sm w-32 px-4 py-2 bg-yellow-300  hover:bg-yellow-400 ">
            Contáctenos
          </p>
        </Link>
      </div>
    </>
  );
}

export default page;
