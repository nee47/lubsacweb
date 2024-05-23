export default function ContactCard({ title, desc, bg }) {
  return (
    <div className={` min-w-[448px] max-w-md p-4 ${bg} rounded-sm mb-3`}>
      <h2 className="font-bold">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
