"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";

function Navigation() {
  const [clicked, setClicked] = useState(false);

  const toggleNav = () => {
    const isMd = window.matchMedia("(min-width: 768px)").matches;
    if (!isMd) setClicked(!clicked);
  };

  return (
    <header>
      <nav className=" flex flex-col md:flex-row w-full items-center md:justify-around  border-b border-black/30">
        <Link href="/">
          <div className="flex items-center  gap-x-4 bg-white max-w-sm rounded-sm ">
            <Image
              className=" h-24 w-auto rounded-sm"
              src={logo}
              alt="Logo de lubricantes especiales del Perú"
            />
            <div className="font-bold">EXPERTOS EN LUBRICACIÓN</div>
          </div>
        </Link>
        {/* THE BURGUER MENU */}
        <button
          onClick={toggleNav}
          className="md:hidden fixed right-4 top-4 z-50 text-black "
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
            clicked ? "right-0 py-4 " : "-right-[100%]"
          } flex flex-col fixed border-t border-t-slate-300 border-b-2 border-b-slate-400 md:border-none pl-6 transition-all top-14 z-40 bg-white duration-700 md:flex md:static md:flex-row justify-center md:size-auto md:m-0 gap-y-10  gap-x-4 px-12`}
        >
          <Link onClick={toggleNav} href="/">
            <div className="text-sm py-2 px-24 md:px-1 hover:text-yellow-600 rounded-sm">
              Inicio
            </div>
          </Link>

          <div className="relative group ">
            <Link onClick={toggleNav} href="/productos/marcas">
              <div className="text-sm z-20 py-2 px-24 md:px-1  hover:text-yellow-600 rounded-sm ">
                Productos
              </div>
            </Link>
          </div>

          <Link onClick={toggleNav} href="/servicios">
            <div className="text-sm  py-2 px-24  md:px-1 hover:text-yellow-600">
              Servicios
            </div>
          </Link>

          <Link onClick={toggleNav} href="/acerca">
            <div className=" text-sm  py-2 px-24 md:px-1  hover:text-yellow-600 rounded-sm hover:opacity-100">
              Nosotros
            </div>
          </Link>

          <Link onClick={toggleNav} href="/bases">
            <div className=" text-sm  py-2 px-24 md:px-1  hover:text-yellow-600 rounded-sm hover:opacity-100">
              Información
            </div>
          </Link>

          <Link onClick={toggleNav} href="/contacto">
            <div className=" text-sm  py-2 px-24 md:px-1 hover:text-yellow-600 rounded-sm">
              Contacto
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
