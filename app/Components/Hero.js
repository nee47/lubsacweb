import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg1.jpg";

export default function Hero() {
  return (
    <div className="relative">
      <div className="flex justify-center w-full h-[680px] ">
        <Image
          src={bg}
          alt="aceites industriales"
          className="w-full object-cover"
          priority
        />
      </div>

      <div className=" absolute top-1/4 left-1/4 h-1/2 max-w-80">
        <h1 className=" text-white text-4xl font-bold  select-none ">
          ESPECIALISTAS EN ACEITES INDUSTRIALES
        </h1>
        <Link href="productos">
          <div className="block rounded-sm text-sm max-w-56 text-white  p-2 bg-black hover:bg-opacity-70 text-center mt-3">
            Conocer productos
          </div>
        </Link>
      </div>
    </div>
  );
}
