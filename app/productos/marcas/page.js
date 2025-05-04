import Image from "next/image";
import Link from "next/link";

export default function page() {
  // ORDEN
  // Hidraulicas
  // Transmision
  // OTHERS
  // Grasas

  return (
    <div className="flex gap-8 py-8 items-center p-4">
      <Link href="/productos/marcas/nrg">
        <Image
          alt=""
          src="/ngr.webp"
          width={200}
          height={100}
          className="shadow-md hover:scale-110 transition-transform ease-in fade-in1 rounded-md"
        />
      </Link>

      <Link href="/productos/marcas/petrocanada">
        <Image
          alt=""
          src="/petro_canada.webp"
          width={150}
          height={90}
          className="shadow-md hover:scale-110 bg-white transition-transform ease-in fade-in2 rounded-md"
        />
      </Link>

      <Link href="/productos/marcas/q7">
        <Image
          alt=""
          src="/q7.jpg"
          width={145}
          height={100}
          className="shadow-md hover:scale-110 transition-transform ease-in fade-in3 rounded-md"
        />
      </Link>

      <Link href="/productos/marcas/antiseize">
        <Image
          alt=""
          src="/anti.jpeg"
          width={145}
          height={100}
          className="shadow-md hover:scale-110 transition-transform ease-in fade-in4 rounded-md"
        />
      </Link>
    </div>
  );
}
