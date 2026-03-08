import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const brands = [
    {
      name: "NRG OIL ENERGY",
      logo: "/ngr.webp",
      href: "/productos/marcas/nrg",
    },
    {
      name: "PETRO-CANADA",
      logo: "/petro_canada.webp",
      href: "/productos/marcas/petrocanada",
    },
    {
      name: "Q7 OILS",
      logo: "/q7.jpg",
      href: "/productos/marcas/q7",
    },
    {
      name: "ANTI-SEIZE",
      logo: "/anti.jpeg",
      href: "/productos/marcas/antiseize",
    },
  ];

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-800">
        {brands.map((brand, i) => (
          <Link
            key={i}
            href={brand.href}
            className="
            group
            relative
            h-[300px]
            border-neutral-800
            border
            p-10
            flex
            flex-col
            justify-between
            bg-gradient-to-br
            from-zinc-900
            to-black
            hover:brightness-125
            transition-all
            duration-300
            "
          >
            {/* logo */}
            <Image
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={60}
              className="object-contain bg-white opacity-90"
            />

            {/* text */}
            <div>
              <h3 className="text-xl font-bold text-white tracking-wider">
                {brand.name}
              </h3>
            </div>

            {/* arrow */}
            <div
              className="
            absolute
            bottom-8
            right-8
            w-10
            h-10
            border
            border-neutral-500
            rounded-full
            flex
            items-center
            justify-center
            text-neutral-300
            group-hover:border-yellow-400
            group-hover:text-yellow-400
            transition
            "
            >
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
