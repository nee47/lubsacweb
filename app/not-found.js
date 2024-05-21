import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col py-20 items-center justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="240"
        height="240"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-error-404"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7v4a1 1 0 0 0 1 1h3" />
        <path d="M7 7v10" />
        <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
        <path d="M17 7v4a1 1 0 0 0 1 1h3" />
        <path d="M21 7v10" />
      </svg>
      <div className="text-xl text-gray-500">PAGINA NO ENCONTRADA</div>
      <Link href="/" className="py-4 hover:text-yellow-500">
        Volver al inicio
      </Link>
    </div>
  );
}
