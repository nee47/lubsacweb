import getData from "@/app/lib/getData";

export async function generateStaticParams() {
  const categories = await getData("categorias.json");

  return categories.map((c) => ({
    category: c.alias,
  }));
}

export default async function page({ params }) {
  console.log("LOS PARAMS SON :");
  console.log(params);

  const { category } = params;

  const products = await getData("data.json");
  const correctProducts = products.filter((p) => {
    return p.alias == category;
  });

  return (
    <div>
      {correctProducts.map((p, index) => (
        <div className="flex justify-center my-6" key={index}>
          <div className=" bg-slate-200 rounded-md max-w-md min-w-[450px] p-4 shadow-sm">
            <h1 className="font-bold text-2xl py-4">{p.nombre}</h1>
            {p.descripcionDetallada.map((d, index) => (
              <div key={index} className="">
                <p className=" mb-4">{d}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
