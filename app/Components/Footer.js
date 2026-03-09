import React from "react";
import Image from "next/image";
import logo from "@/public/newlogo.jpg";
import igcon from "@/public/ig_icon.png";
import ttcon from "@/public/tt_icon.png";
import WhatsAppButton from "./WhatsappButton";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* LOGO + INFO */}

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-4">Navegación</h3>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-black transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-black transition">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/marcas" className="hover:text-black transition">
                Marcas
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-black transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/acerca" className="hover:text-black transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/acerca" className="hover:text-black transition">
                Información
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-black transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-4">Contacto</h3>

          <div className="flex flex-col gap-3 text-sm">
            <WhatsAppButton number="51981366304" name="Francisco" />
            <WhatsAppButton number="51961484883" name="Alejandro" />
          </div>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-4">Síguenos</h3>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575171504720"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/lubesacperu"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Image src={igcon} alt="Instagram" className="size-7" />
            </a>

            <a
              href="https://www.tiktok.com/@lubricantes.espec"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Image src={ttcon} alt="Tiktok" className="size-7" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              className="h-16 w-auto rounded-full"
              src={logo}
              alt="Lubricantes Especiales del Perú"
            />
            <span className="font-semibold text-slate-800 leading-tight">
              Lubricantes Especiales del Perú S.A.C.
            </span>
          </div>

          <p className="text-sm text-slate-500 max-w-xs">
            Soluciones en lubricación industrial para minería, transporte,
            construcción e industria en general.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        Website powered by
        <a
          href="https://devmotec.com"
          target="_blank"
          className="ml-1 hover:text-slate-600"
        >
          Devmotec
        </a>
      </div>
    </footer>
  );
}

export default Footer;
