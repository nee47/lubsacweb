import getData from "@/app/lib/getData";

export async function generateStaticParams() {
  const categories = await getData("categorias.json");

  return categories.map((c) => ({
    category: c.alias,
  }));
}

export default async function page({ params }) {
  const { category } = params;

  const products = await getData("data.json");
  const correctProducts = products.filter((p) => {
    return p.alias == category;
  });

  const logos = {
    "Petro-Canada": {
      src: "/petro_canada.webp",
      w: "50px",
      h: "55px",
    },
    nrg: {
      src: "/ngr.webp",
      w: "92px",
      h: "40px",
    },
    Q7: {
      src: "/q7.jpg",
      w: "50px",
      h: "50px",
    },
  };

  return (
    <div className="grid md:grid-cols-2 justify-center gap-4 my-8 mx-4">
      {correctProducts.map((p, index) => (
        <div className="flex justify-center " key={index}>
          <div className=" rounded-md max-w-md min-w-[300px] w-full md:w-[500px] p-4 shadow-sm shadow-slate-200">
            <div>
              <img
                src={logos[p.brand]?.src}
                alt="logo"
                className={`w-[${logos[p.brand]?.w}] h-[${
                  logos[p.brand]?.h
                }] object-cover max-h-12`}
              />
              <h1 className="font-bold text-2xl mb-4 py-2 h-20 border-b border-b-slate-200 ">
                {p.name}
              </h1>
            </div>

            {p.description?.map((d, index) => (
              <p key={index} className=" mb-2 text-slate-600 text-sm">
                {d}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
