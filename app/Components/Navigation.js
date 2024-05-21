"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

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
    {
      label: "SERVICIOS",
      route: "/servicios",
    },
    {
      label: "CONTACTO",
      route: "/contacto",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggleNav = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className="flex flex-col  md:flex-row w-full items-center md:justify-around py-4 border-b border-black/30">
        <Link href="/">
          <div className="flex items-center  gap-x-4 bg-white max-w-sm rounded-sm">
            <Image
              className=" h-16 w-auto rounded-sm"
              src={logo}
              alt="LUBESAC"
            />
            <div className=" text-md max-w-44 font-medium text-black leading-5">
              <span className="font-bold">Lubricantes</span> Especiales del Perú
            </div>
          </div>
        </Link>
        {/* THE BURGUER MENU */}
        <div className="md:hidden fixed right-6 top-4 z-30">
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
          } flex flex-col fixed md:flex md:static md:flex-row  items-center justify-center md:size-auto md:m-0 gap-y-10  gap-x-4 px-12`}
        >
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                onClick={toggleNav}
                className=" h-8 text-sm  py-4 px-24 md:px-1 md:hover:text-yellow-600 rounded-sm"
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
