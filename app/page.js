import Hero from "./Components/Hero";
import Image from "next/image";
import Mision from "./Components/Mision";
import PhotoCarousel from "./Components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col items-center gap-7 m-auto pt-12 w-3/4 ">
        <p className="text-3xl font-bold text-yellow-200 rounded-sm bg-black px-10 text-center py-4">
          Lubricantes especiales del Perú SAC
        </p>
        <h2 className=" font-bold text-yellow-400">
          COMBINAMOS EXPERIENCIA E INNOVACIÓN
        </h2>
        <div className=" ">
          <p className=" ">
            Lubricantes Especiales del Perú, con participación en los sectores
            de Minería, transporte, Industria, Construcción, Pesca,
            Metalmecánica, textil y otros.
          </p>
          <p className=" py-4">
            Contamos con una gran variedad y amplitud de productos NRG oil
            energy, Petrocanada, Q7 y Anti-Seize.
          </p>

          <p>
            Marcas que cuentan con un portafolio completo de grasas y aceites de
            próxima generación: sintéticos, semi-sintéticos, sanitarios y
            biodegradables.
          </p>
        </div>
      </div>

      {/* <ProductSection /> */}
      <PhotoCarousel></PhotoCarousel>

      <Mision></Mision>

      <div className=" my-16 mx-auto">
        <h2 className=" text-center font-bold">Representantes exclusivos</h2>
        <div className=" flex flex-wrap items-center justify-center gap-16 mt-10 ">
          <Image
            width={150}
            height={50}
            className=""
            src="petro_canada.webp"
            alt=""
          />
          <Image
            width={250}
            height={150}
            className=""
            src="ngr.webp  "
            alt=""
          />
          <Image width={150} height={80} className="" src="q7.jpg" alt="" />
          <Image
            width={150}
            height={150}
            src="anti.jpeg"
            alt="anti-seize marca"
          ></Image>
          {/* <Image width={150} height={80} className="" src="adinol.png" alt="" /> */}
        </div>
      </div>
    </>
  );
}
