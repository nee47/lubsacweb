import getData from "@/app/lib/getData";
import Image from "next/image";
import Link from "next/link";

// ORDEN

// Hidraulicas
// Transmisiones
// OTHERS
// Grasas

const normalizeTitle = (title) => {
  const t = title.charAt(0).toUpperCase() + title.slice(1);
  return t.replaceAll("-", " ");
};

function getProductsByCategory(products) {
  let res = products.reduce((acc, item) => {
    if (!acc[item.alias]) {
      acc[item.alias] = []; // Inicializa la categoría si no existe
    }
    acc[item.alias]?.push(item); // Agrega el elemento al array
    return acc;
  }, {});
  return res;
}

function getUniqueCategories(products) {
  const uniqueAliases = new Set(); // Usamos un Set para evitar duplicados
  let result = [];

  return [...new Map(products.map((item) => [item.alias, item])).values()]; // Convertimos el Set a un array
}

export default async function page() {
  const products = await getData("data.json");
  const categories = await getData("categorias.json");

  const petroProducts = products.filter((p) => {
    return p.brand == "nrg";
  });

  const unique = getUniqueCategories(petroProducts);

  let categoriesSource = {};

  categories.map((c) => {
    categoriesSource[c.alias] = c.img_src;
  });

  // const productsByCategory = getProductsByCategory(petroProducts);
  // //console.log(productsByCategory[unique[2]]);
  console.log(categoriesSource);

  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image src="/ngr.webp" width={200} height={200} alt="nrg"></Image>
      </div>

      <div className="flex flex-wrap gap-4 p-6 justify-center md:w-[70%]">
        {unique.map((c, index) => (
          <Link
            href={`nrg/${c.alias}`}
            key={index}
            className={`font-bold text-center relative`}
          >
            <img
              src={`${categoriesSource[c.alias]}`}
              alt="categoria producto"
              className="h-36 w-64 rounded-lg text-lg  flex items-center justify-center hover:bg-green-600 filter brightness-50 hover:blur-sm  transition-[background]"
            ></img>

            <p className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              {normalizeTitle(c.alias)}
            </p>
          </Link>
        ))}
      </div>

      {/* 
      {unique.map(
        (p) =>
          productsByCategory[p] && (
            <CategoryByBrand
              key={p}
              category={p}
              productos={productsByCategory[p]}
            ></CategoryByBrand>
          )
      )} */}
    </div>
  );
}
