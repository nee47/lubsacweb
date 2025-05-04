import React from "react";
import logo from "@/public/newlogo.jpg";
import Image from "next/image";
import igcon from "@/public/ig_icon.png";
import ttcon from "@/public/tt_icon.png";
import WhatsAppButton from "./WhatsappButton";

function Footer() {
  return (
    <footer className="relative flex justify-center bg-slate-900 text-white py-16 gap-x-2 md:gap-x-32 ">
      <div className="flex items-center  gap-x-4  max-w-sm rounded-sm">
        <Image
          className=" h-24 w-auto rounded-full bg-white"
          src={logo}
          alt="Lubricantes especiales del Perú"
        />
        <div className=" text-md max-w-44 font-medium text-white leading-5">
          <span className="font-bold">Lubricantes</span> Especiales del Perú
          S.A.C.
        </div>
      </div>

      <div className="text-sm">
        <div className="flex items-center gap-4">
          <WhatsAppButton
            number="51981366304"
            name="Francisco"
          ></WhatsAppButton>

          <WhatsAppButton
            number="51961484883"
            name="Alejandro"
          ></WhatsAppButton>
        </div>
        <div className="flex items-center mt-3 ">
          <a
            href="https://www.facebook.com/profile.php?id=61575171504720"
            target="_blank"
            className="hover:scale-125 transition-transform ease-in"
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

          <a href="https://www.instagram.com/lubesacperu" target="_blank">
            <Image
              src={igcon}
              alt="lubesac instagram"
              className="size-8 hover:scale-125 transition-transform ease-in"
            />
          </a>

          <a href="https://www.tiktok.com/@lubricantes.espec" target="_blank">
            <Image
              src={ttcon}
              alt="lubesac tiktok"
              className="size-8 hover:scale-125 transition-transform ease-in"
            />
          </a>
        </div>
      </div>

      <a
        href="https://jamesvilca-porfolio.netlify.app/"
        target="_blank"
        className="absolute bottom-4 right-6 text-slate-400 text-xs"
      >
        Website powered by James Vilca
      </a>
    </footer>
  );
}

export default Footer;
