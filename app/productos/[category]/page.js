import { promises as fs } from "fs";
import path from "path";

export function generateStaticParams() {
  //const jsonpath = path.basename(path.dirname(process.cwd()));

  //const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  //const products = JSON.parse(null);
  const products = [{ nombre: "grasas", descripcion: "hola" }];
  return products.map((product) => ({
    category: product.nombre,
  }));
}

export default async function page({ params }) {
  console.log("LOS PARAMS SON :");
  console.log(params);

  const { category } = params;

  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const products = JSON.parse(file);
  const correctProducts = products.filter((p) => {
    return p.categoria == category;
  });

  console.log(correctProducts);

  return (
    <div className="">
      {correctProducts.map((p) => (
        <>
          <h1>{p.nombre}</h1>
          <p>descripcion</p>
        </>
      ))}
    </div>
  );
}
