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
      <div className="flex items-end ">
        <Image
          className="rounded-md"
          src="/ngr.webp"
          width={200}
          height={200}
          alt="logo nrg"
        />

        <div className="mx-4 h-1 w-full bg-gradient-to-r from-blue-500 via-green-400 to-orange-600"></div>
      </div>

      <CategoryGroupByBrand brand="nrg" />
    </div>
  );
}
