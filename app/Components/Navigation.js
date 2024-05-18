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
      <nav className="flex flex-col  md:flex-row w-full items-center md:justify-around py-4">
        <Link href="/">
          <div className="flex items-center  gap-x-4 bg-white max-w-sm ">
            <img className=" h-16 w-auto" src="logo.jpg" alt="LUBESAC" />
            <div className=" text-md max-w-44 font-medium text-black leading-5">
              <span className="font-bold">Lubricantes</span> Especiales del Perú
            </div>
          </div>
        </Link>
        {/* THE BURGUER MENU */}
        <div className="md:hidden absolute right-6 top-4 z-30">
          <button
            onClick={toggleNav}
            className="navbar-burger flex items-center text-black p-3"
          >
            <svg
              className="block h-8 w-8 fill-current"
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
            clicked ? " size-full top-0  m-auto z-20 bg-white  " : "hidden"
          } flex flex-col fixed md:flex md:static md:flex-row m-5 items-center justify-center md:size-auto md:m-0 gap-y-10  gap-x-10 px-12`}
        >
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                onClick={toggleNav}
                className=" h-8 text-sm  hover:text-yellow-500 py-4 px-24 md:px-0"
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
