import getData from "@/app/lib/getData";
import CategoryByBrand from "@/app/Components/CategoryByBrand";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const { category } = params;

  const products = await getData("data.json");
  const correctProducts = products.filter((p) => {
    return p.alias == category && p.brand == "petrocanada";
  });

  if (correctProducts.length == 0) redirect("/404");

  return (
    <div className=" my-8 mx-4">
      <CategoryByBrand
        category={category}
        productos={correctProducts}
      ></CategoryByBrand>
    </div>
  );
}
