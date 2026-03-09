export const BRAND_CONFIG = [
  {
    slug: "q7",
    name: "Q7",
    dataBrand: "q7",
    description:
      "Linea versatil para operacion industrial continua con buen balance costo-rendimiento.",
  },
  {
    slug: "petro-canada",
    name: "Petro Canada",
    dataBrand: "petrocanada",
    description:
      "Lubricantes premium para alta exigencia, larga vida util y aplicaciones grado alimenticio.",
  },
  {
    slug: "nrg-oil",
    name: "NRG Oil",
    dataBrand: "nrg",
    description:
      "Soluciones tecnicas para compresores, hidraulica y equipos industriales de alto trabajo.",
  },
  {
    slug: "anti-seize",
    name: "Anti Seize",
    dataBrand: "antiseize",
    description:
      "Especialistas en compuestos antigripantes y proteccion de roscas en ambientes severos.",
  },
];

export function getBrandBySlug(slug) {
  return BRAND_CONFIG.find((b) => b.slug === slug);
}