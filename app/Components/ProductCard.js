import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ title, imgPath, productPath }) {
  return (
    <div className=" max-w-80  pb-12">
      <div className="relative">
        <Image
          src={imgPath}
          //placeholder="blur"
          alt="producto"
          className="min-w-[250px]"
        />
        <div className="flex absolute inset-0  opacity-0 bg-black md:hover:opacity-80">
          <Link
            href={productPath}
            className="flex  m-auto w-40 h-10 items-center justify-center font-bold text-white text-xs border  md:border-yellow-100 md:text-yellow-100 bg-black hover:text-black hover:bg-yellow-50 "
          >
            Ver producto
          </Link>
        </div>
      </div>
      <Link href={productPath}>
        <h2 className=" uppercase text-sm  md:mt-4 py-2 text-yellow-100 bg-black  text-center md:text-gray-500 md:bg-transparent md:hover:text-black">
          {title}
        </h2>
      </Link>
    </div>
  );
}
