import React from "react";
import Link from "next/link";

const links = [
  {
    label: "INICIO",
    route: "/",
  },
  {
    label: "PRODUCTOS",
    route: "/productos",
  },
  {
    label: "NOSOTROS",
    route: "/acerca",
  },
];

function Navigation() {
  return (
    <header className="flex">

      <div className="flex items-center  gap-x-8 bg-white px-10 py-2">
        <img className=" h-24 w-fit" src="logo.jpg" alt="LUBESAC" />
        <div className=" text-2xl font-bold text-yellow-500 ">
          Lubricantes Especiales del Perú
        </div>
      </div>

      <nav className=" flex flex-col bg-gray-800 w-full justify-end">
        <ul className="flex m-5 gap-x-10 self-center text-white">
          {links.map(({ label, route }) => (
            <li key={route} className="px-4">
              <Link
                className=" block h-8 text-white  hover:text-yellow-500"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
