import Link from "next/link";

export default function TabBar() {
  return (
    <>
      <ul className="flex w-[400px] text-sm font-medium sm:flex-row text-center">
        <li className="w-full focus-within:z-10">
          <Link
            href="/productos/marcas"
            className="inline-block rounded-md w-full p-4 bg-zinc-800 border border-zinc-700 text-yellow-300 focus:bg-yellow-300 focus:text-zinc-800 focus:border-yellow-600"
          >
            POR MARCAS
          </Link>
        </li>

        <li className="w-full focus-within:z-10">
          <Link
            href="/productos"
            className="inline-block rounded-md w-full p-4 bg-zinc-800 border border-zinc-700 text-yellow-300 focus:bg-yellow-300 focus:text-zinc-800 focus:border-yellow-600 "
          >
            POR INDUSTRIA
          </Link>
        </li>
      </ul>
    </>
  );
}
