import React from "react";
import Link from "next/link";

function Card({ name, url }) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-sm overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <Link href={url}>
        <img
          className="w-full h-48 object-cover object-center"
          src="aceites_lubricante_automotriz-1.jpg"
          alt="Imagen del producto"
        />
      </Link>

      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default Card;
