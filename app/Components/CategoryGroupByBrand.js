import getData from "@/app/lib/getData";
import Link from "next/link";
import Image from "next/image";

const normalizeTitle = (title) => {
  const t = title.charAt(0).toUpperCase() + title.slice(1);
  return t.replaceAll("-", " ");
};

function getUniqueCategories(products) {
  return [...new Map(products.map((item) => [item.alias, item])).values()]; // Convertimos el Set a un array
}

export default async function CategoryGroupByBrand({ brand }) {
  const products = await getData("data.json");
  const categories = await getData("categorias.json");

  const filteredProducts = products.filter((p) => {
    return p.brand == brand;
  });

  const unique = getUniqueCategories(filteredProducts);

  let categoriesSource = {};

  categories.map((c) => {
    categoriesSource[c.alias] = c.img_src;
  });

  return (
    <section className="flex flex-wrap gap-6 px-6 pb-10 justify-center md:w-[70%]">
      {unique.map((c, index) => (
        <Link
          href={`${brand}/${c.alias}`}
          key={index}
          className={`font-bold text-center relative group  `}
        >
          <Image
            src={`${categoriesSource[c.alias]}`}
            alt="categoria producto"
            height={40}
            width={100}
            className="h-36 w-64 rounded-lg text-lg  flex items-center justify-center filter  group-hover:blur-sm transition-[background]"
          ></Image>

          <h1 className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-md backdrop:blur-md">
            {normalizeTitle(c.alias)}
          </h1>
        </Link>
      ))}
    </section>
  );
}
