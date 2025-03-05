import getData from "@/app/lib/getData";
import Image from "next/image";

export default async function page() {
  const products = await getData("data.json");
  const pcProducts = products.filter((p) => {
    return p.brand == "q7";
  });

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src="/q7.jpg" width={200} height={200} alt="q7"></Image>
      </div>

      <div className="flex flex-wrap justify-center w-[70%] gap-10 my-8 mx-4">
        {pcProducts.map((p, index) => (
          <div className="flex w-full md:w-auto justify-center " key={index}>
            <div className=" rounded-md max-w-md min-w-[300px] w-full md:w-[500px] p-4 shadow-md">
              <h1 className="font-bold text-xl md:text-2xl py-2 h-20  border-b border-b-slate-400 ">
                {p.name}
              </h1>
              <div className="py-2 text-sm">
                <span className="font-bold">Categorias: </span>
                {p.categories.map((d, index) => d)}
              </div>

              <div className="text-sm">
                <span className="font-bold">Registros: </span>
                {p.registrations.map((d, index) => d)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
