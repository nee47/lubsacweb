import Hero from "./Components/Hero";
import Image from "next/image";
import Mision from "./Components/Mision";
import PhotoCarousel from "./Components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="flex flex-col p-14 m-auto mt-36 max-w-[900px] ">
        <h2 className="text-3xl font-bold">
          Lubricantes especiales del Perú S.A.C.
        </h2>
        <h3 className="font-bold pt-4">COMBINAMOS EXPERIENCIA E INNOVACIÓN</h3>
        <div className="text-zinc-600">
          <p className=" ">
            En Lubricantes Especiales del Perú participamos activamente en
            diversos sectores productivos como minería, transporte, industria,
            construcción, pesca, metalmecánica, textil, entre otros.
          </p>
          <p className="py-4">
            Ofrecemos una amplia variedad de lubricantes y soluciones
            especializadas, trabajando con marcas reconocidas como NRG Oil
            Energy, Petro-Canada, Q7 y Anti-Seize.
          </p>

          <p>
            Nuestro portafolio incluye grasas y aceites de última generación,
            diseñados para brindar máximo rendimiento y protección en
            condiciones exigentes, incluyendo productos sintéticos,
            semi-sintéticos, sanitarios y biodegradables.
          </p>
        </div>
      </section>

      {/* <ProductSection /> */}
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        <PhotoCarousel />
        <Mision></Mision>
      </div>

      <div className=" my-16 mx-auto">
        <h2 className=" text-center font-bold">Representantes exclusivos</h2>
        <div className=" flex flex-wrap items-center justify-center gap-16 mt-10 ">
          <Image
            width={150}
            height={50}
            src="/petro_canada.webp"
            alt="petro canada logo"
          />
          <Image width={250} height={150} src="/ngr.webp" alt="nrg logo" />
          <Image width={150} height={80} src="/q7.jpg" alt="q7 logo" />
          <Image
            width={150}
            height={150}
            src="/anti.jpeg"
            alt="antiseize logo"
          ></Image>
          {/* <Image width={150} height={80} className="" src="adinol.png" alt="" /> */}
        </div>
      </div>
    </>
  );
}
