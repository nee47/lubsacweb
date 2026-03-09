"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";

const productSubmenu = [
  { title: "Categorias", ref: "/productos" },
  { title: "Marcas", ref: "/marcas" },
  { title: "Q7", ref: "/marcas/q7" },
  { title: "Petro Canada", ref: "/marcas/petro-canada" },
  { title: "NRG Oil", ref: "/marcas/nrg-oil" },
  { title: "Anti Seize", ref: "/marcas/anti-seize" },
];

function Navigation() {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [productsOpenMobile, setProductsOpenMobile] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  const tabs = [
    { title: "Inicio", ref: "/" },
    { title: "Productos", ref: "/productos", hasSubmenu: true },
    { title: "Servicios", ref: "/servicios" },
    { title: "Nosotros", ref: "/acerca" },
    { title: "Informacion", ref: "/bases" },
    { title: "Contacto", ref: "/contacto" },
  ];

  const toggleNav = () => {
    const isMd = window.matchMedia("(min-width: 768px)").matches;
    if (!isMd) {
      setClicked((prev) => {
        const next = !prev;
        if (!next) setProductsOpenMobile(false);
        return next;
      });
    }
  };

  const handleLinkClick = () => {
    const isMd = window.matchMedia("(min-width: 768px)").matches;
    if (!isMd) {
      setClicked(false);
      setProductsOpenMobile(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
        setClicked(false);
        setProductsOpenMobile(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!clicked) return;
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      if (isMd) return;

      if (navRef.current && !navRef.current.contains(event.target)) {
        setClicked(false);
        setProductsOpenMobile(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setClicked(false);
        setProductsOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [clicked]);

  return (
    <header>
      <nav
        ref={navRef}
        className={`fixed bg-white/95 backdrop-blur-sm z-50 flex flex-col md:flex-row w-full items-center md:justify-around border-b border-neutral-200 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" onClick={handleLinkClick}>
          <div className="flex items-center gap-x-4 max-w-sm rounded-sm px-2">
            <Image
              className="h-20 w-auto rounded-full"
              src={logo}
              alt="Logo de lubricantes especiales del Peru"
            />
            <div className="font-bold text-sm tracking-wide">EXPERTOS EN LUBRICACION</div>
          </div>
        </Link>

        <button
          onClick={toggleNav}
          className="md:hidden absolute right-3 top-6 z-50 text-black bg-white p-2 rounded-md shadow-md border border-neutral-200"
          aria-label="Abrir menu"
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

        <div
          className={`text-black bg-white md:bg-transparent ${
            clicked ? "right-0 py-6" : "-right-[110%]"
          } flex flex-col fixed border-t border-t-slate-300 border-b-2 border-b-slate-400 md:border-none pl-6 pr-8 transition-all top-14 z-40 duration-300 md:flex md:static md:flex-row justify-center md:size-auto md:m-0 gap-y-6 md:gap-y-0 gap-x-5 md:px-0 rounded-bl-2xl md:rounded-none shadow-xl md:shadow-none`}
        >
          {tabs.map((tab) => {
            if (!tab.hasSubmenu) {
              return (
                <Link key={tab.title} onClick={handleLinkClick} href={tab.ref}>
                  <div className="text-sm z-20 py-2 px-8 md:px-1 hover:text-yellow-600 rounded-sm font-medium transition-colors">
                    {tab.title}
                  </div>
                </Link>
              );
            }

            return (
              <div key={tab.title} className="relative group">
                <div className="flex items-center gap-2">
                  <Link onClick={handleLinkClick} href={tab.ref}>
                    <div className="text-sm z-20 py-2 px-8 md:px-1 hover:text-yellow-600 rounded-sm font-medium transition-colors">
                      {tab.title}
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setProductsOpenMobile((prev) => !prev)}
                    className="md:hidden text-xs px-2 py-1 rounded border border-neutral-200"
                    aria-label="Abrir submenu de productos"
                  >
                    {productsOpenMobile ? "-" : "+"}
                  </button>
                </div>

                <div className="hidden md:block absolute left-0 top-full pt-3 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-neutral-200 rounded-xl shadow-lg p-2">
                    {productSubmenu.map((item) => (
                      <Link key={item.ref} href={item.ref}>
                        <div className="px-3 py-2 text-sm rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                          {item.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {productsOpenMobile && (
                  <div className="md:hidden mt-2 ml-3 border-l-2 border-yellow-300 pl-3 flex flex-col gap-2">
                    {productSubmenu.map((item) => (
                      <Link key={item.ref} href={item.ref} onClick={handleLinkClick}>
                        <span className="text-sm text-neutral-600 hover:text-yellow-700 transition-colors">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="h-[100px]"></div>
    </header>
  );
}

export default Navigation;
