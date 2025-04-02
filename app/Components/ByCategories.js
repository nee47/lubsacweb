import ProductCard from "@/app/Components/ProductCard";
import getData from "../lib/getData";

export default async function ByCategories() {
  const products = await getData("categorias.json");

  return (
    <div className=" my-14 grid md:grid-cols-3 gap-x-4 md:max-w-2xl">
      {products.slice(0, 5).map((p, index) => (
        <ProductCard
          key={index}
          title={p.categoria}
          imgPath={p.img_src || c1}
          productPath={"productos/" + p.alias}
        />
      ))}
    </div>
  );
}
