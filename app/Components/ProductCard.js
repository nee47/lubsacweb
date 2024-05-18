export default function ProductCard({ title, imgPath }) {
  return (
    <div className=" relative max-w-80  pb-12">
      <img src={imgPath} alt="" />
      <div className="flex absolute inset-0  opacity-0 bg-black hover:opacity-80">
        <button className=" m-auto max- w-28 h-10 font-bold text-white text-xs border  border-white bg-black hover:text-black hover:bg-white ">
          Ver producto
        </button>
      </div>
      <h2 className="text-sm mt-10 text-center text-gray-600">{title}</h2>
    </div>
  );
}
