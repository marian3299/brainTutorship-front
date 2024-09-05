const TableMaestros = () => {
  const headers = [
    "Fecha",
    "Alumno",
    "Clase",
    "Horas",
    "Modalidad",
    "Apoyo gas",
  ];

  const clases = [
    {
      id: 234321,
      fecha: "12/08/2024",
      alumno: "Andres Cardenas",
      clase: "Matematicas",
      horas: 2,
      modalidad: "Presencial",
      apoyoGas: 100,
    },
    {
      id: 83831,
      fecha: "10/04/2024",
      alumno: "Patricia Pech",
      clase: "Español",
      horas: 1,
      modalidad: "Presencial",
      apoyoGas: 0,
    },
  ];

  return (
    <>
      <div className="p-4 lg:ml-52 bg-blue-1/90 h-screen">
        <h2 className="text-white text-3xl ">Mariana Ampudia</h2>
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
              {clases.map((item, index) => {
                const { fecha, alumno, clase, horas, modalidad, apoyoGas } =
                  item;
                return (
                  <tr className="bg-grey h-10" key={index}>
                    <td className="pl-3">{fecha}</td>
                    <td>{alumno}</td>
                    <td>{clase}</td>
                    <td>{horas}</td>
                    <td>{modalidad}</td>
                    <td>{apoyoGas}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableMaestros;
