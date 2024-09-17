import { maestrosData } from "../utils/data";
import Card from "../utils/Card";

const AdminMaestros = () => {
  return (
    <div className="p-4 lg:ml-52 bg-blue-1/90 h-screen">
      <h2 className="text-white text-3xl hidden lg:block mb-5">Maestros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {maestrosData.map((maestro, index) => {
          const { name } = maestro;
          return (
            <Card key={index} nombre={name} route="/homeAdmin/maestros/id" />
          );
        })}
      </div>
    </div>
  );
};

export default AdminMaestros;
