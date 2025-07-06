import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative herobg h-screen ">
      <div className=" relative top-1/4 w-[60%] left-[20%] md:left-1/4 h-1/2 md:max-w-72 hero-animation">
        <h1 className=" text-white text-4xl font-bold  select-none ">
          ESPECIALISTAS EN ACEITES INDUSTRIALES
        </h1>
        <Link href="productos/marcas">
          <div className="block rounded-sm text-sm md:max-w-56 text-white p-2 bg-black hover:bg-opacity-70 text-center mt-3">
            Conocer productos
          </div>
        </Link>
      </div>
    </div>
  );
}
