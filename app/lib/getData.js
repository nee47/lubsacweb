import { promises as fs } from "fs";

export default async function getData(name) {
  const file = await fs.readFile(process.cwd() + `/public/${name}`, "utf8");
  const products = JSON.parse(file);
  return products;
}
