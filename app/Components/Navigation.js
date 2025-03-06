"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Navigation() {
  const [clicked, setClicked] = useState(false);

  const toggleNav = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className=" flex  flex-col md:flex-row w-full items-center md:justify-around py-4 border-b border-black/30">
        <Link href="/">
          <div className="flex items-center  gap-x-4 bg-white max-w-sm rounded-sm ">
            <Image
              className=" h-16 w-auto rounded-sm"
              src={logo}
              alt="LUBESAC"
            />
            <div className=" text-md max-w-44 font-medium text-black leading-5">
              <span className="font-bold">Lubricantes</span> Especiales del Perú
              S.A.C.
            </div>
          </div>
        </Link>
        {/* THE BURGUER MENU */}
        <button
          onClick={toggleNav}
          className=" md:hidden  fixed right-4 top-4 z-30 text-black"
        >
          <svg
            className="block  fill-current"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        <div
          className={`${
            clicked ? "size-full top-0   z-20 bg-white  " : "hidden"
          } flex flex-col fixed pl-6 md:flex md:static md:flex-row  items-center justify-center md:size-auto md:m-0 gap-y-10  gap-x-4 px-12`}
        >
          <Link onClick={toggleNav} href="/">
            <div className="text-sm py-2 px-24 md:px-1 md:hover:text-yellow-600 rounded-sm">
              Inicio
            </div>
          </Link>

          <div className="relative group">
            <Link onClick={toggleNav} href="/productos">
              <div className="text-sm z-20 py-2 px-24 md:px-1  md:hover:text-yellow-600 rounded-sm ">
                Productos
              </div>
            </Link>

            <Link onClick={toggleNav} href="/servicios">
              <div className="mt-8 md:mt-0 py-2 md:top-0 md:opacity-0 md:border-t-2 md:border-gray-300 md:absolute z-10  text-sm px-24 md:px-3  md:hover:text-yellow-600 transition-all ease-in rounded-sm bg-white  group-hover:top-8 group-hover:opacity-100">
                Servicios
              </div>
            </Link>
          </div>

          <Link onClick={toggleNav} href="/acerca">
            <div className=" text-sm  py-2 px-24 bg-white md:px-1  md:hover:text-yellow-600 rounded-sm hover:opacity-100">
              Nosotros
            </div>
          </Link>

          <Link onClick={toggleNav} href="/bases">
            <div className=" text-sm  py-2 px-24 bg-white md:px-1  md:hover:text-yellow-600 rounded-sm hover:opacity-100">
              Información
            </div>
          </Link>

          <Link onClick={toggleNav} href="/contacto">
            <div className=" text-sm  py-2 px-24 md:px-1 md:hover:text-yellow-600 rounded-sm">
              Contacto
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
