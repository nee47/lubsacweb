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

  products.forEach((product) => {
    if (product?.alias) {
      uniqueAliases.add(product.alias);
    }
  });

  return Array.from(uniqueAliases); // Convertimos el Set a un array
}

export default async function page() {
  const products = await getData("data.json");

  const petroProducts = products.filter((p) => {
    return p.brand == "Q7";
  });

  const unique = getUniqueCategories(petroProducts);

  // const productsByCategory = getProductsByCategory(petroProducts);
  // //console.log(productsByCategory[unique[2]]);

  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image src="/q7.jpg" width={200} height={200} alt="nrg"></Image>
      </div>

      <div className="flex flex-wrap gap-4 p-6 justify-center md:w-[70%]">
        {unique.map((c, index) => (
          <Link
            href={`q7/${c}`}
            key={index}
            className={`font-bold text-white  text-center`}
          >
            <div className="h-32 w-52 rounded-lg text-lg  flex items-center justify-center bg-slate-900 hover:bg-black transition-[background]">
              {normalizeTitle(c)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
