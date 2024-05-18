import ProductCard from "./Components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-center w-full h-[735px] ">
          <img src=" bg1.jpg" alt="aceite" className="w-full object-cover" />
        </div>

        <div className=" absolute top-1/4 left-1/4   h-1/2 w-1/4 ">
          <h1 className="text-white text-4xl font-extrabold  select-none ">
            ESPECIALISTAS EN ACEITES INDUSTRIALES
          </h1>
          <Link href="productos">
            <div className="block text-sm max-w-56 text-white  p-2 bg-black hover:bg-opacity-70 text-center mt-3">
              Conocer productos
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 m-auto pt-20 pb-20 w-3/4">
        <p className="text-3xl font-bold text-yellow-500">
          Lubricantes especiales del Perú
        </p>
        <h2 className=" font-bold">COMBINAMOS EXPERIENCIA E INNOVACION</h2>
        <p className="">
          Lubricantes Especiales del Perú, con participación en los sectores de
          Minería, transporte, Industria, Construcción, Pesca, Metalmecánica,
          textil y otros. Contamos con una gran variedad y amplitud de productos
          NRG oil energy, Vicco oil energy, Petrocanada, Addinol (Alemania),
          Verkol (España). Marcas que cuentan con un portafolio completo de
          grasas y aceites depróxima generación: sintéticos, semi-sintéticos,
          sanitarios y biodegradables.
        </p>
      </div>

      <section className="py-12 flex flex-col items-center">
        <h1 className="text-center font-bold">PRODUCTOS</h1>
        <div className=" my-14 grid md:grid-cols-2 ">
          <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath="cilinder.jpg" />
          <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath="cilinder.jpg" />
          <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath="cilinder.jpg" />

          <ProductCard title="CATEGORIA DEL PRODUCTO" imgPath="cilinder.jpg" />
        </div>
      </section>

      <div className=" my-16 mx-auto">
        <h2 className=" text-center font-bold">MARCAS SOCIAS</h2>
        <div className=" flex flex-wrap justify-center gap-16 mt-10 ">
          <img className="h-24" src="petro_canada.png" alt="" />
          <img className=" h-20" src="adinol.png" alt="" />
          <img className="h-20" src="ngr.jpg  " alt="" />
          <img className="h-14 " src="verkol.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
