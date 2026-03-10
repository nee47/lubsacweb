import Hero from "./Components/Hero";
import Image from "next/image";
import Mision from "./Components/Mision";
import PhotoCarousel from "./Components/PhotoCarousel";
import FadeUp from "./Components/FadeUpComp";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col flex-wrap justify-center items-center pt-28">
        <FadeUp duration="0.2s">
          <section className="relative flex flex-col items-center px-6 py-10 md:p-14 m-auto mt-20 md:mt-28 max-w-[900px]">
            <h2 className="text-3xl font-bold text-center uppercase">
              Lubricantes especiales del Peru S.A.C.
            </h2>
            <h3 className="font-bold pt-4 text-yellow-500 text-center">
              Combinamos experiencia e innovación
            </h3>
            <Image
              src="/newlogo.jpg"
              width={300}
              height={300}
              alt="Lubricantes especiales dle Peru logo"
            />
            <div className=" text-zinc-800 flex flex-col items-center md:flex-row  gap-x-4 pt-10">
              <p
                className="max-w-[400px] bg-white/40 backdrop-blur-md back border border-zinc-200 border-t-transparent rounded-lg p-4 hover:border hover:border-yellow-400 hover:border-t-transparent hover:-translate-y-1
              transition-all duration-300 hover:text-black"
              >
                Ofrecemos una amplia variedad de lubricantes y soluciones
                especializadas, trabajando con marcas reconocidas como NRG Oil
                Energy, Petro-Canada, Q7 y Anti-Seize.
              </p>
              <p
                className="max-w-[400px] bg-white/40 backdrop-blur-md border border-zinc-200 border-b-transparent rounded-lg p-4 hover:border hover:border-yellow-400 hover:border-b-transparent hover:-translate-y-1
              transition-all duration-300 hover:text-black"
              >
                Nuestro portafolio incluye grasas y aceites de ultima
                generacion, disenados para brindar maximo rendimiento y
                proteccion en condiciones exigentes, incluyendo productos
                sinteticos, semi-sinteticos, sanitarios y biodegradables.
              </p>
            </div>
          </section>
        </FadeUp>
      </div>

      <FadeUp duration="0.1s">
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          <PhotoCarousel />
          <Mision />
        </div>
      </FadeUp>

      <div className="my-44 mx-auto px-6">
        <h2 className="text-center font-bold text-lg">
          Representantes exclusivos
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
          <FadeUp duration="0.1s">
            <Image
              width={150}
              height={50}
              src="/petro_canada.webp"
              alt="petro canada logo"
            />
          </FadeUp>
          <FadeUp duration="0.2s">
            <Image width={250} height={150} src="/ngr.webp" alt="nrg logo" />
          </FadeUp>
          <FadeUp duration="0.3s">
            <Image width={150} height={80} src="/q7.jpg" alt="q7 logo" />
          </FadeUp>
          <FadeUp duration="0.4s">
            <Image
              width={150}
              height={150}
              src="/anti.jpeg"
              alt="antiseize logo"
            />
          </FadeUp>
        </div>
      </div>
    </>
  );
}
