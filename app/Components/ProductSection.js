import ProductCard from "./ProductCard";
import Link from "next/link";
import c1 from "@/public/cilinder.jpg";

export default function ProductSection() {
  return (
    <section className="py-12 flex flex-col items-center">
      <h1 className="text-center font-bold">ALGUNOS DE NUESTRO PRODUCTOS</h1>
      <div className=" my-14 grid md:grid-cols-2 ">
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />

        <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath={c1} />
      </div>
      <Link href="/productos">
        <h2 className=" text-sm px-4 py-2 bg-yellow-300 hover:bg-yellow-400 ">
          Ver más productos
        </h2>
      </Link>
    </section>
  );
}
