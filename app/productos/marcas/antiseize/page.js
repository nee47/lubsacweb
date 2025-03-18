import getData from "@/app/lib/getData";
import Image from "next/image";
import CategoryByBrand from "@/app/Components/CategoryByBrand";

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

  const nrgProducts = products.filter((p) => {
    return p.brand == "antiseize";
  });

  const productsByCategory = getProductsByCategory(nrgProducts);

  console.log("unique categories");
  console.log(unique);

  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image src="/anti.jpeg" width={200} height={200} alt="nrg"></Image>
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
    </div>
  );
}
