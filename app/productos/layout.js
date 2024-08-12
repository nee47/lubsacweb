import TabBar from "../Components/TabBar";

export default function categoryLayout({ children }) {
  return (
    <div className="flex flex-col items-center gap-y-12 ">
      <section className="w-full  bg-gray-500/30 py-12 px-16 md:px-44 ">
        <h1 className=" text-2xl font-bold my-2 px-4 ">GAMA DE PRODUCTOS</h1>
        <p className="text-base md:text-lg px-4 max-w-2xl">
          Usando el lubricante adecuado puede lograr un gran ahorro y, a la vez
          maximizar la eficiencia de su maquinaria, prolongar la productividad
          de su negocio y reducir el tiempo fuera de servicio.{" "}
        </p>
      </section>

      {/* <div>
        <div>
          BEBA
        </div>
      </div> */}

      <TabBar></TabBar>

      {children}
    </div>
  );
}
