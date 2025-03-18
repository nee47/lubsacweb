import getData from "@/app/lib/getData";
import Image from "next/image";
import CategoryByBrand from "@/app/Components/CategoryByBrand";
import ProductCard from "@/app/Components/ProductCard";

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
    if (product.alias) {
      uniqueAliases.add(product.alias);
    }
  });

  return Array.from(uniqueAliases); // Convertimos el Set a un array
}

export default async function page() {
  const products = await getData("data.json");
  const unique = getUniqueCategories(products);

  const q7Products = products.filter((p) => {
    return p.brand == "Q7";
  });

  const productsByCategory = getProductsByCategory(q7Products);

  console.log("unique categories");
  console.log(unique);

  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image src="/q7.jpg" width={200} height={200} alt="nrg"></Image>
      </div>

      {unique.map(
        (p) =>
          productsByCategory[p] && (
            <CategoryByBrand
              key={p}
              category={p}
              productos={productsByCategory}
            ></CategoryByBrand>
          )
      )}

      {/* <div className="flex flex-wrap justify-center w-[70%] gap-10 my-8 mx-4">
        {pcProducts.map((p, index) => (
          <div className="flex w-full md:w-auto justify-center " key={index}>
            <div className=" rounded-md max-w-md min-w-[300px] w-full md:w-[500px] p-4 shadow-sm shadow-slate-300">
              <h1 className="font-bold text-xl md:text-2xl py-2 h-20  border-b border-b-slate-200 ">
                {p.name}
              </h1>
              <div className="py-2 text-sm">
                <span className="font-bold">Categorias: </span>
                {p.categories.map((d, index) => d)}
              </div>

              <div className="text-sm">
                <span className="font-bold">Descripción: </span>
                {p.description.map((d, index) => d)}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
