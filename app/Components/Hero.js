import Link from "next/link";
import Image from "next/image";
import FadeUp from "./FadeUpComp";

export default function Hero() {
  return (
    <div className="relative flex flex-wrap justify-center items-center pt-[25%] lg:pt-[10%] ">
      <div className="">
        <div className="relative z-20 py-8 pl-6 md:max-w-md ">
          <h1 className="text-black text-5xl font-bold select-none">
            ESPECIALISTAS EN ACEITES INDUSTRIALES
          </h1>

          <Link href="productos/marcas">
            <div className="mt-8 rounded-sm text-sm text-center w-[200px] text-zinc-700 p-2 bg-yellow-200 hover:bg-opacity-70">
              Conocer productos
            </div>
          </Link>
        </div>
      </div>

      <Image
        className="rounded-md w-auto"
        src="/bg1.jpg"
        alt="generic background image"
        width={500}
        height={400}
      />
    </div>
  );
}
