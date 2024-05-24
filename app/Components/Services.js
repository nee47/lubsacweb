import ContactCard from "./ContactCard";

export default function Services() {
  return (
    <div className="">
      <section className="w-full  bg-gray-500/30 py-12 px-16 md:px-44 ">
        <h1 className=" text-2xl font-bold my-2 px-4 ">SERVICIOS</h1>
        <p className="text-base md:text-lg px-4 max-w-2xl">
          LUBRICANTES INDUSTRIALES DEL PERU S.A.C, pone a su disposición el
          programa integral de servicios de análisis de aceite, cuyo objetivo es
          el AHORRO.
        </p>
      </section>

      <div className="flex flex-col items-center gap-y-6 mt-14">
        <h2 className="font-bold text-xl">¿DE QUE MANERA LOGRAMOS ESTO?</h2>

        <div>
          <ContactCard
            desc=" Reducción  de sus consumos de  lubricantes "
            bg="bg-sky-300"
          ></ContactCard>
          <ContactCard
            desc=" Actualización  de  sus cartillas  de  Lubricación"
            bg="bg-sky-300"
          ></ContactCard>
          <ContactCard
            desc=" Correcto asesoramiento para la utilización del producto"
            bg="bg-sky-300"
          ></ContactCard>
        </div>
      </div>
    </div>
  );
}
