import Image from "next/image";
import CategoryGroupByBrand from "@/app/Components/CategoryGroupByBrand";

// ORDEN

// Hidraulicas
// Transmisiones
// OTHERS
// Grasas

export default async function page() {
  return (
    <div className="flex flex-col items-center gap-24 relative ">
      <div className="absolute inset-0  filter brightness-50 hue"></div>

      <div>
        <Image src="/ngr.webp" width={200} height={200} alt="nrg"></Image>
      </div>

      <CategoryGroupByBrand brand="nrg" />
    </div>
  );
}
