import Link from "next/link";

export default function TabBar() {
  return (
    <>
      <ul className="flex flex-col gap-x-2 w-[400px] text-sm font-medium text-center  shadow sm:flex-row">
        <li className="w-full focus-within:z-10">
          <Link
            href="/productos/marcas"
            className="inline-block w-full p-4 rounded-lg border-s-0 bg-white border-gray-200 focus:ring-2 focus:outline-none focus:ring-yellow-300 hover:bg-gray-100"
          >
            Por Marcas
          </Link>
        </li>

        <li className="w-full focus-within:z-10">
          <Link
            href="/productos/"
            className="inline-block w-full p-4 text-gray-900 bg-white rounded-lg rounded-s-lg focus:ring-2 focus:ring-yellow-300 active focus:outline-none hover:bg-gray-100"
            aria-current="page"
          >
            Por tipo de industria
          </Link>
        </li>
      </ul>
    </>
  );
}
