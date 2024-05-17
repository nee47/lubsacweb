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
    <header>
      <nav className=" flex w-full justify-center py-3">
        <div className="flex items-center  gap-x-4 bg-white max-w-sm border border-black ">
          <img className=" h-20 w-auto" src="logo.jpg" alt="LUBESAC" />
          <div className=" text-xl font-medium text-black leading-5">
            Lubricantes Especiales del Perú
          </div>
        </div>
        <ul className="flex m-5 items-center gap-x-10 border border-black ">
          {links.map(({ label, route }) => (
            <li key={route} className="px-4">
              <Link className=" block h-8  hover:text-yellow-500" href={route}>
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
