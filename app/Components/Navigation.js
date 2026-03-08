"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";

function Navigation() {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const tabs = [
    {
      title: "Inicio",
      ref: "/",
    },
    {
      title: "Productos",
      ref: "/productos/marcas",
    },
    {
      title: "Servicios",
      ref: "/servicios",
    },
    {
      title: "Nosotros",
      ref: "/acerca",
    },
    {
      title: "Información",
      ref: "/bases",
    },
    {
      title: "Contacto",
      ref: "/contacto",
    },
  ];

  const toggleNav = () => {
    const isMd = window.matchMedia("(min-width: 768px)").matches;
    if (!isMd) setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down past 80px threshold
        setVisible(false);
        setClicked(false); // close mobile menu when hiding
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed bg-white z-50 flex flex-col md:flex-row w-full items-center md:justify-around transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-x-4 max-w-sm rounded-sm">
            <Image
              className="h-20 w-auto rounded-full"
              src={logo}
              alt="Logo de lubricantes especiales del Perú"
            />
            <div className="font-bold text-sm ">EXPERTOS EN LUBRICACIÓN</div>
          </div>
        </Link>

        {/* THE BURGUER MENU */}
        <button
          onClick={toggleNav}
          className="md:hidden absolute right-2 top-6 z-50 text-black bg-white p-2 rounded-md shadow-md"
        >
          <svg
            className="block fill-current"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {/* DIV QUE CONTIENE A INICIO PRODUCTOS SERVICOS ETC*/}
        <div
          className={`text-black bg-white md:bg-transparent ${
            clicked ? "right-0 py-4" : "-right-[110%]"
          } flex flex-col fixed border-t border-t-slate-300 border-b-2 border-b-slate-400 md:border-none pl-6 transition-all top-14 z-40 duration-500 md:flex md:static md:flex-row justify-center md:size-auto md:m-0 gap-y-10 gap-x-4 px-12`}
        >
          {tabs.map((tab, index) => {
            return (
              <Link key={index} onClick={toggleNav} href={tab.ref}>
                <div className="text-sm z-20 py-2 px-24 md:px-1 hover:text-yellow-600 rounded-sm">
                  {tab.title}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
