import Link from "next/link";

export default function ProductCard({ title, imgPath }) {
  return (
    <div className=" max-w-80  pb-12">
      <div className="relative">
        <img src={imgPath} alt="" />
        <div className="flex absolute inset-0  opacity-0 bg-black md:hover:opacity-80">
          <Link
            href="/"
            className="flex  m-auto w-40 h-10 items-center justify-center font-bold text-white text-xs border  border-white bg-black hover:text-black hover:bg-white "
          >
            Ver producto
          </Link>
        </div>
      </div>
      <Link href="#">
        <h2 className="text-sm mt-4 p-2 bg-black text-white  md:p-0 text-center md:text-gray-500 md:bg-transparent md:hover:text-black">
          {title}
        </h2>
      </Link>
    </div>
  );
}
