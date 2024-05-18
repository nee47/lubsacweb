export default function Services() {
  return (
    <div className="relative h-96 w-full">
      <img
        src="bg2.jpg"
        className=" w-full h-full object-cover filter brightness-50"
        alt=""
      />
      <div className="flex flex-col gap-6 absolute top-24 left-28 z-100 text-white text-2xl">
        <p className="font-bold">NUESTROS SERVICIOS</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem
          odio, maximus at luctus a, ultrices a augue. Nulla nunc turpis, mattis
          eu lacus at, laoreet porta risus.
        </p>
      </div>
    </div>
  );
}
