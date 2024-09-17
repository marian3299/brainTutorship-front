const TablaAlumnos = () => {
  const headers = ["Fecha", "Clase", "Maestro", "Horas", "Modalidad"];

  const clases = [
    {
      id: 234321,
      fecha: "12/08/2024",
      clase: "Matematicas",
      maestro: "Andres Cardenas",
      horas: 2,
      modalidad: "Presencial",
    },
    {
      id: 83831,
      fecha: "10/04/2024",
      clase: "Español",
      maestro: "Patricia Pech",
      horas: 1,
      modalidad: "Presencial",
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
                const { fecha, clase, maestro, horas, modalidad } = item;
                return (
                  <tr className="bg-grey h-10" key={index}>
                    <td className="pl-3">{fecha}</td>
                    <td>{clase}</td>
                    <td>{maestro}</td>
                    <td>{horas}</td>
                    <td>{modalidad}</td>
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

export default TablaAlumnos;
