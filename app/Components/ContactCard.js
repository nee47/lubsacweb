export default function ContactCard({ title, desc, bg }) {
  return (
    <div className={` min-w-[320px] max-w-md p-4 mx-2 ${bg} rounded-sm mb-3`}>
      <h2 className="font-bold">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
