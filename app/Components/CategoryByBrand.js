import Image from "next/image";

export default async function CategoryByBrand({ category, productos }) {
  const cat = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="m-4">
      <h1 className="text-2xl p-4 w-[50%] bg-black  text-white font-semibold">
        {cat.replaceAll("-", " ")}
      </h1>

      {/* debajo de esto */}

      {productos?.map((p, index) => (
        <article key={index} className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:w-[800px]  border-b border-slate-400  p-4">
            <h3 className="font-bold w-[270px] flex-shrink-0">{p.name}</h3>

            <div>
              {p.description?.map((d, index) => (
                <div key={index}>
                  <p className="text-slate-600 text-sm">{d}</p>
                </div>
              ))}
            </div>
            {p.img && (
              <Image
                src={p.img}
                width={200}
                height={250}
                alt="product image"
              ></Image>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
