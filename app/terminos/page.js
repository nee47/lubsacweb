import React from "react";

export const metadata = {
  title: "Términos y Condiciones | LUBSAC",
  description: "Términos y Condiciones de venta de Lubricantes Especiales del Perú S.A.C.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="space-y-6 text-neutral-600">
          <p>
            Bienvenido a Lubricantes Especiales del Perú S.A.C. (LUBSAC). Al interactuar con nosotros o adquirir nuestros productos, usted acepta los siguientes términos y condiciones.
          </p>
          
          <h2 className="text-xl font-bold text-neutral-800 pt-4">1. Condiciones de Pago y Facturación</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Nuevos Clientes:</strong> Para la primera compra y clientes nuevos, el pago debe realizarse de manera adelantada mediante <strong>transferencia bancaria</strong>. El despacho del pedido se realizará una vez que los fondos hayan sido confirmados en nuestras cuentas.
            </li>
            <li>
              <strong>Clientes Regulares:</strong> Los clientes con historial de compras continuo y buen comportamiento de pago podrán acceder a <strong>crédito directo</strong>, sujeto a una evaluación crediticia previa por nuestro departamento de cobranzas.
            </li>
            <li>Todos los precios incluyen IGV, salvo que se especifique lo contrario en la cotización formal.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-800 pt-4">2. Envíos y Despachos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Realizamos envíos a todo el territorio nacional del Perú.</li>
            <li>Los tiempos de entrega varían según el destino y la disponibilidad del stock al momento de la confirmación del pago.</li>
            <li>La mercadería viaja por cuenta y riesgo del comprador, a menos que se pacten condiciones específicas por escrito.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-800 pt-4">3. Calidad y Garantía</h2>
          <p>
            Garantizamos que todos nuestros lubricantes, grasas y aceites industriales cumplen con los estándares de calidad especificados por sus respectivos fabricantes (NRG Oil Energy, Petro-Canada, Q7, Anti-Seize, etc.).
          </p>

          <h2 className="text-xl font-bold text-neutral-800 pt-4">4. Devoluciones</h2>
          <p>
            No se aceptan devoluciones por productos abiertos o manipulados indebidamente. Cualquier reclamo por faltantes o productos en mal estado debe realizarse dentro de las 48 horas posteriores a la recepción de la mercadería.
          </p>

          <p className="pt-8 text-sm text-neutral-500">
            Última actualización: {new Date().toLocaleDateString('es-PE')}
          </p>
        </div>
      </div>
    </div>
  );
}
