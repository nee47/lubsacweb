import ByCategories from "../Components/ByCategories";

import Image from "next/image";

async function page() {
  const brochures = [
    { img: "brochure1.jpg", pdf: "brochure_food_oil.pdf" },
    {
      img: "brochure2.jpg",
      pdf: "CATALOGO_METALMECANICA.pdf",
    },
    {
      img: "SOLUBLES.jpg",
      pdf: "SOLUBLES.pdf",
    },
    {
      img: "electro.jpg",
      pdf: "CATALOGO_FLUIDOS_DE_ELECTROEROSION.pdf",
    },
    {
      img: "hidraulica.jpg",
      pdf: "hidraulica.pdf",
    },
    {
      img: "compresores.jpg",
      pdf: "compresores_de_aire.pdf",
    },
    {
      img: "proceso.jpg",
      pdf: "aceite_proceso.pdf",
    },
    {
      img: "grasas.jpg",
      pdf: "grasas.pdf",
    },
  ];

  return (
    <>
      <ByCategories></ByCategories>
      <article className="w-full">
        <h1 className="text-4xl font-bold py-4 text-center"> Brochures</h1>

        <ul className="flex flex-wrap justify-center m-auto gap-6 max-w-[1000px]">
          {brochures.map((item, index) => {
            return (
              <li key={index} className="">
                <a target="_blank" href={item?.pdf}>
                  <Image
                    alt="brochure image"
                    src={item?.img}
                    width={300}
                    height={500}
                    className="rounded-md"
                  ></Image>
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
