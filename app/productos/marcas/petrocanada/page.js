import Image from "next/image";
import CategoryGroupByBrand from "@/app/Components/CategoryGroupByBrand";

// ORDEN

// Hidraulicas
// Transmisiones
// OTHERS
// Grasas

export default async function page() {
  return (
    <div className="flex flex-col items-center gap-24">
      <div>
        <Image
          src="/petro_canada.webp"
          width={200}
          height={200}
          alt="nrg"
          className="p-2 bg-white rounded-md"
        ></Image>
      </div>

      <CategoryGroupByBrand brand="petrocanada" />
    </div>
  );
}
