"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Welcome() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setActive("opacity-0");
      onClose();
    }, 400);

    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`${active} transition-opacity duration-[900ms] fixed z-[80] h-screen w-screen bg-slate-200`}
    >
      <div className="relative top-[40%] left-[45%]">
        <Image
          src="logo.png"
          alt="logo"
          width={100}
          height={100}
          className="relative  animate-spin"
        ></Image>
      </div>
    </div>
  );
}
