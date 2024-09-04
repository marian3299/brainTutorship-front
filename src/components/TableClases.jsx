import { clasesData } from "../utils/data";

const TableClases = () => {
  const headers = [
    "Fecha",
    "Día",
    "Maestro",
    "Alumno",
    "Inicio",
    "Fin",
    "Total",
    "Modalidad",
    "Apoyo gas",
    "Comentarios",
  ];
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-[1178px]  border-collapse text-left text-white p-10 xl:w-full">
        <thead className="bg-blue-2 h-10">
          <tr>
            {headers.map((header, index) => (
              <th
                scope="col"
                className="font-normal first:pl-3 last:w-[15%]"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clasesData.map((item, index) => {
            const {
              fecha,
              dia,
              maestro,
              alumno,
              horaInicio,
              horaFin,
              total,
              modalidad,
              apoyoGas,
              comentarios,
            } = item;
            return (
              <tr className="bg-grey h-10" key={index}>
                <td className="pl-3">{fecha}</td>
                <td>{dia}</td>
                <td>{maestro}</td>
                <td>{alumno}</td>
                <td>{horaInicio}</td>
                <td>{horaFin}</td>
                <td>{total}</td>
                <td>{modalidad}</td>
                <td>{apoyoGas}</td>
                <td className="whitespace-normal break-words">{comentarios}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableClases;
