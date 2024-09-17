import { alumnosData } from "../utils/data";
import Card from "../utils/Card";

const AdminAlumnos = () => {
  return (
    <div className="p-4 lg:ml-52 bg-blue-1/90 h-screen">
      <h2 className="text-white text-3xl hidden lg:block mb-5">Alumnos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {alumnosData.map((alumno, index) => {
          const { name } = alumno;
          return (
            <Card key={index} nombre={name} route="/homeAdmin/alumnos/id" />
          );
        })}
      </div>
    </div>
  );
};

export default AdminAlumnos;
