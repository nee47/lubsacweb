import Image from "next/image";
import petro from "@/public/petro_canada.webp";
import ngr from "@/public/ngr.webp";
import exp from "@/public/exp.jpg";

function page() {
  return (
    <div className="flex flex-col">
      <section className="w-full  bg-yellow-500/30 py-12 px-16 md:px-[15%]">
        <h1 className=" text-2xl font-bold my-2 px-4 ">¿QUIENES SOMOS?</h1>
        <p className="text-base md:text-lg px-4 max-w-3xl">
          LUBRICANTES ESPECIALES DEL PERÚ SAC, con RUC: 20523985842. Es uno de
          los mayores distribuidores de Lubricantes Industriales, con
          participación en los sectores de Minería, Transporte, Industria,
          Construcción, Pesca, Metalmecánica, Textil y otros sectores que
          participan en la generación de bienes y servicios.
        </p>
      </section>

      <div className="flex flex-col items-center  px-10 py-10 md:px-[15%] md:py-16 gap-y-4 gap-x-12 ">
        <div className=" flex flex-wrap items-center justify-center  gap-4 ">
          <Image src={petro} alt="" className="min-w-32 w-32 h-auto" />
          <Image src={ngr} alt="" className="min-w-44 w-44 h-auto" />
          <Image src="q7.jpg" alt="q7 oils" width={130} height={130} />
        </div>

        <div className="w-full">
          <p className=" break-words ">
            Contamos con una gran variedad y amplitud de productos NRG OIL,
            ENERGY PETROCANADA (Canada), Q7 (Perú) y Antiseize (USA).
          </p>

          <p className="py-5">
            Marcas que cuentan con un portafolio completo de grasas y aceites de
            próxima generación: sinteticos ,semi-sintéticos, sanitarios y
            biodegradables.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 w-full py-20 px-10 md:px-[15%] ">
        {/* <p className=" w-44  text-3xl  font-bold  ">+15 AÑOS EN EL MERCADO</p> */}

        <Image
          src={exp}
          alt="más de 15 años de experiencia"
          className="rounded-md"
        />

        <ul className="py-6">
          <li>
            ✅ Asesoría técnica a través de nuestros ingenieros para la correcta
            utilización de nuestros productos
          </li>
          <li>✅ Guías de lubricación para sus maquinarias y/o equipos.</li>
          <li>
            ✅ Programas de Diagnósticos de Equipos vía Análisis de muestras de
            aceite en uso.
          </li>
          <li>✅ Certificación de eliminación de residuos.</li>
        </ul>
      </div>
    </div>
  );
}

export default page;
