import Link from "next/link";
import Image from "next/image";
import FadeUp from "./FadeUpComp";

export default function Hero() {
  return (
    <div className=" flex flex-col px-6 md:flex-row gap-x-12 justify-center items-center pt-[7%]">
      <FadeUp>
        <div className=" py-8 max-w-2xl">
          <h1 className="text-zinc-800 text-5xl font-bold select-none leading-[50px]">
            Especialistas en lubricantes industriales
          </h1>

          <p className="mt-4 text-zinc-500">
            En Lubricantes Especiales del Perú participamos activamente en
            diversos sectores productivos como minería, transporte, industria,
            construcción, pesca, metalmecánica, textil, entre otros.
          </p>

          <Link href="productos">
            <div className="mt-8 rounded-sm text-sm text-center w-[200px] text-zinc-700 p-2 bg-yellow-200 hover:bg-opacity-70">
              Conocer productos
            </div>
          </Link>
        </div>
      </FadeUp>

      <FadeUp duration={"0.21s"}>
        <Image
          className=" rounded-md "
          src="/bg1.jpg"
          alt="generic background image"
          width={600}
          height={400}
        />
      </FadeUp>
    </div>
  );
}
