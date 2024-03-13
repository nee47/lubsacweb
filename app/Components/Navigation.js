import React from "react";
import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Productos",
    route: "/productos",
  },
  {
    label: "Nosotros",
    route: "/acerca",
  },
];

function Navigation() {
  return (
    <header>
      <img
        src="wsp.png"
        alt="contacto wsp"
        className=" fixed h-9 right-1 top-5"
      />

      <div className="flex items-center px-20 gap-x-24 bg-black">
        <img className=" h-24 w-fit" src="logo.jpg" alt="LUBESAC" />
        <div className=" text-3xl font-bold text-yellow-500">
          Lubricantes Especiales del Perú
        </div>
      </div>

      <nav className=" flex flex-col bg-black ">
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
