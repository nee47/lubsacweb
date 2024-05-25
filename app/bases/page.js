import ContactCard from "../Components/ContactCard";
import Image from "next/image";
import bg from "@/public/bg2.jpg";

export default function page() {
  return (
    <div>
      <section className="py-6 max-w-6xl  m-auto">
        <div className="relative w-fit rounded-md">
          <Image
            className="h-44 object-cover filter brightness-50 rounded-md"
            src={bg}
            alt="factory background"
          />
          <div className="flex items-center justify-center absolute inset-0 m-auto">
            <h1 className="font-bold text-3xl text-white">BASES LUBRICANTES</h1>
          </div>
        </div>

        <div className="px-8 py-16 lg:px-0">
          <h2 className="font-bold text-2xl mb-4">Tipos de acites Básicos</h2>
          <ul className="flex flex-col gap-y-2">
            <li>Aceites básicos API Grupo I</li>
            <li>
              <div>
                <h3>Acites básicos API Grupo II</h3>
                <p className="px-6">1. Hidrocraqueo</p>
                <p className="px-6">
                  2. Desparafinado catalítico o hidroisomerización de cera
                </p>
                <p className="px-6">3. Hidroterminado</p>
              </div>
            </li>
            <li>Aceites básicos API Grupo III</li>
          </ul>
        </div>

        <article>
          <h2 className="font-bold text-xl">Fabricación de aceites básicos</h2>
          <p className="py-4">
            El petróleo crudo es unamezcla de una amplia variedad de compuestos
            de hidrocarburos con diferentes tamaños moleculares. El tamaño de
            cada compuesto se determina por el número de átomos de carbono que
            se encuentren enlazados con átomos de hidrógeno formando una
            estructura de cadena.
          </p>

          <p className="pb-4">
            En general, cuanto más larga sea la cadena de hidrocarburos, mayor
            será la temperatura de evaporación de dicho compuesto.
          </p>

          <p className="pb-4">
            Es a través del proceso de refinación por destilación que el
            petróleo crudopuedeserseparadoensusdiferentes
            compuestos.Elpetróleoes calentado en una torre de destilación donde
            sus compuestos se evaporan y suben a través de la torre,
            condensándose los compuestos más pesados en la parte baja de la
            torre (combustibles pesados, diesel, aceites básicos, etc.) y los
            más ligeros en la parta superior de la torre (solventes, gasolinas,
            gas, etc.).
          </p>

          <p>
            Los aceites producidos en este proceso de destilación se denominan
            aceites “básicos”, ya que posteriormente serán purificados y
            mezclados con aditivos que mejorarán su rendimiento para producir
            aceites de motor, aceites hidráulicos, fluidos de transmisión,
            lubricantes de engranajes, entre otros.
          </p>
        </article>
      </section>
    </div>
  );
}