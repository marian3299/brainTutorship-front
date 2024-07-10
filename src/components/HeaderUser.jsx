import Button from "../utils/Button";

export default function HeaderUser() {
  return (
    <>
      <div className="flex flex-col lg:justify-between lg:px-10 bg-blue-1 items-center py-4 lg:flex-row gap-4 px-4">
        <h1 className="text-white text-xl lg:text-2xl">Bienvenido Pepito</h1>
        <Button>+ Añadir clase</Button>
      </div>
    </>
  );
}
