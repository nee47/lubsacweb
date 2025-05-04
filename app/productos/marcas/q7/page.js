import Image from "next/image";
import CategoryGroupByBrand from "@/app/Components/CategoryGroupByBrand";

export default async function page() {
  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image src="/q7.jpg" width={200} height={200} alt="nrg"></Image>
      </div>

      <CategoryGroupByBrand brand="q7" />
    </div>
  );
}
