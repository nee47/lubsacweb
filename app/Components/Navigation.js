"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navigation() {
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

  const [clicked, setClicked] = useState(false);

  const toggleNav = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className="flex flex-col  md:flex-row w-full justify-center py-3">
        <Link href="/">
          <div className="flex items-center  gap-x-4 bg-white max-w-sm ">
            <img className=" h-20 w-auto" src="logo.jpg" alt="LUBESAC" />
            <div className=" text-xl max-w- font-medium text-black leading-5">
              Lubricantes Especiales del Perú
            </div>
          </div>
        </Link>

        <div class="md:hidden absolute right-6 top-32 z-30">
          <button
            onClick={toggleNav}
            class="navbar-burger flex items-center text-black p-3"
          >
            <svg
              class="block h-8 w-8 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            clicked
              ? "flex flex-col fixed size-full top-0  m-auto z-20 bg-white  "
              : "hidden"
          } md:flex m-5 items-center gap-x-10 px-12`}
        >
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                onClick={toggleNav}
                className=" block h-8  hover:text-yellow-500"
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
