import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex gap-8 py-8 items-center">
      <Link href="/productos/marcas/nrg">
        <Image
          alt=""
          src="/ngr.webp"
          width={200}
          height={100}
          className="shadow-md"
        />
      </Link>

      <Link href="/productos/marcas/petrocanada">
        <Image
          alt=""
          src="/petro_canada.webp"
          width={150}
          height={90}
          className="shadow-md"
        />
      </Link>

      <Link href="/productos/marcas/q7">
        <Image
          alt=""
          src="/q7.jpg"
          width={145}
          height={100}
          className="shadow-md"
        />
      </Link>
    </div>
  );
}
