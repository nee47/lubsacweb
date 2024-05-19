import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="flex justify-center w-full h-[735px] ">
        <img src=" bg1.jpg" alt="aceite" className="w-full object-cover" />
      </div>

      <div className=" absolute top-1/4 left-1/4 h-1/2 w-80">
        <h1 className=" text-white text-4xl font-extrabold  select-none ">
          ESPECIALISTAS EN ACEITES INDUSTRIALES
        </h1>
        <Link href="productos">
          <div className="block text-sm max-w-56 text-white  p-2 bg-black hover:bg-opacity-70 text-center mt-3">
            Conocer productos
          </div>
        </Link>
      </div>
    </div>
  );
}
