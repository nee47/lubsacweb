import Image from "next/image";
import BackButton from "./BackArrow";

export default async function CategoryByBrand({ category, productos }) {
  const cat = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="m-4 bg-zinc-100 rounded-sm p-20 ">
      <BackButton></BackButton>
      <h1 className="text-4xl p-4 mt-4 md:w-[50%] bg-black/80 rounded-sm text-white font-semibold">
        {cat.replaceAll("-", " ")}
      </h1>

      {/* debajo de esto */}

      {productos?.map((p, index) => (
        <article key={index} className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:w-[800px] bg-white  border-b border-slate-400  p-8 rounded-md">
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
