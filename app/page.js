import Image from "next/image";
import Navigation from "./Components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-center w-full h-[735px] ">
          <img src=" bg1.jpg" alt="aceite" className="w-full object-cover" />
        </div>

        <div className=" absolute top-1/4 left-1/4   h-1/2 w-1/4 ">
          <h1 className="text-white text-4xl font-extrabold select-none ">
            ESPECIALISTAS EN ACEITES INDUSTRIALES
          </h1>
          <div className=" inline-block  bg-slate-50 hover:bg-opacity-70  bg-opacity-60 text-center mt-3 rounded-md">
            <Link href="productos" className=" block p-4">
              Conocer productos
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 m-auto pt-20 pb-20 w-3/4">
        <p className="text-3xl font-bold text-yellow-500">
          Lubricantes especiales del Perú
        </p>
        <h2 className=" font-bold">COMBINAMOS EXPERIENCIA E INNOVACION</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem
          odio, maximus at luctus a, ultrices a augue. Nulla nunc turpis, mattis
          eu lacus at, laoreet porta risus. Fusce tempus, purus at convallis
          tempus, dui ipsum tincidunt velit, quis tincidunt metus arcu ac
          tortor. Proin iaculis velit dolor, at facilisis neque varius nec.
          Pellentesque diam neque, ornare ut metus nec, pretium maximus dolor.
        </p>
      </div>

      <div className="relative h-96 w-full">
        <img
          src="bg2.jpg"
          className=" w-full h-full object-cover filter brightness-50"
          alt=""
        />
        <div className="flex flex-col gap-6 absolute top-24 left-28 z-100 text-white text-2xl">
          <p className="font-bold">NUESTROS SERVICIOS</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem
            odio, maximus at luctus a, ultrices a augue. Nulla nunc turpis,
            mattis eu lacus at, laoreet porta risus.
          </p>
        </div>
      </div>

      <div className=" m-16">
        <h2 className=" text-center font-bold">
          MARCAS CON LAS QUE TRABAJAMOS
        </h2>
        <div className="flex justify-center gap-16 mt-10">
          <img src="shell.png" alt="" />
          <img src="shell.png" alt="" />
          <img src="shell.png" alt="" />
          <img src="shell.png" alt="" />
        </div>
      </div>
    </div>
  );
}
