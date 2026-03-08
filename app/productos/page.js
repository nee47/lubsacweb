import ByCategories from "../Components/ByCategories";

import Image from "next/image";

async function page() {
  const brochures = [
    { img: "/brochure1.webp", pdf: "brochure_food_oil.pdf" },
    {
      title: "Metalmecánica",
      img: "/brochure2.webp",
      pdf: "CATALOGO_METALMECANICA.pdf",
    },
    {
      title: "ACEITES SOLUBLES",
      img: "/SOLUBLES.webp",
      pdf: "SOLUBLES.pdf",
    },
    {
      title: "FLUIDOS DE ELECTROEROSION",
      img: "/electro.jpg",
      pdf: "CATALOGO_FLUIDOS_DE_ELECTROEROSION.pdf",
    },
    { title: "hidráulicas", img: "/hidraulica.webp", pdf: "hidraulica.pdf" },
    {
      title: "Compresores de aire",
      img: "/compresores.jpg",
      pdf: "compresores_de_aire.pdf",
    },
    {
      title: "Aceites de proceso",
      img: "/proceso.jpg",
      pdf: "aceite_proceso.pdf",
    },
    { title: "Grasas", img: "/grasas.jpg", pdf: "grasas.pdf" },
  ];

  return (
    <>
      <ByCategories />
      <article className="w-full">
        <h1 className="text-4xl font-bold py-4 text-center"> Brochures</h1>

        <ul className="flex flex-wrap justify-center mx-auto mt-20 gap-6 max-w-[1000px]">
          {brochures.map((item, index) => {
            if (!item.title) {
              return (
                <li key={index}>
                  <a target="_blank" href={item?.pdf}>
                    <div className="w-[200px] h-[280px] hover:scale-105 transition-transform">
                      <Image
                        src={item.img}
                        width={200}
                        height={280}
                        alt="purity brochure pdf"
                      />
                    </div>
                  </a>
                </li>
              );
            }

            return (
              <li key={index} className="">
                <a target="_blank" href={item?.pdf}>
                  <div className=" group w-[200px] h-[280px] flex flex-col items-center justify-around rounded-l-lg p-4 bg-gradient-to-b from-black to-zinc-700 hover:scale-105 transition-transform">
                    <h3 className="text-yellow-200 text-sm font-bold ">
                      Lubricantes Especiales Del Perú S.A.C.
                    </h3>
                    <Image
                      src="/newlogo.jpg"
                      className="rounded-full h-auto group-hover:shadow-xl group-hover:shadow-yellow-200"
                      width={60}
                      height={60}
                      alt="logo lubricantes especiales del peru"
                    />
                    <p className="text-white text-lg uppercase group-hover:underline group-hover:underline-offset-4 font-bold p-2 text-center">
                      {item.title}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}

export default page;
