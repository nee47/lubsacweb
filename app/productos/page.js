import Card from "../Components/Card";

function page() {
  return (
    <div>
      productos
      <div className="flex flex-wrap gap-7 max-w-2xl  m-auto">
        <Card name="ACEITES" url="/prodcuto1" />
        <Card name="SERVICIOS" url="" />
        <Card name="REFRIGERANTES" url="" />
        <Card name="ASESORIA" url="" />
      </div>
    </div>
  );
}

export default page;
