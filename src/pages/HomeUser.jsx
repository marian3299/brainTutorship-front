import { useState } from "react";
import HeaderUser from "../components/HeaderUser";
import ModalUser from "../components/ModalUser";

export default function HomeUser() {
  
  const [openModal, setOpenModal] = useState(false);  

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const data = [
    {
      fecha: "01/01/2021",
      dia: "Lunes",
      horaInicio: "08:00",
      horaFin: "09:00",
      total: 1,
      alumno: "Juanito Perez",
      modalidad: "Presencial",
      apoyoGas: "Si",
      comentarios: "Ninguno",
    },
    {
      fecha: "01/01/2021",
      dia: "Lunes",
      horaInicio: "09:00",
      horaFin: "10:00",
      total: 1,
      alumno: "Mariana Alvarado González",
      modalidad: "Presencial",
      apoyoGas: "Si",
      comentarios: "Ninguno",
    },
    {
      fecha: "01/01/2021",
      dia: "Lunes",
      horaInicio: "10:00",
      horaFin: "11:00",
      total: 1,
      alumno: "Juanito",
      modalidad: "Presencial",
      apoyoGas: "Si",
      comentarios: "Ninguno",
    },
    {
      fecha: "01/01/2021",
      dia: "Lunes",
      horaInicio: "10:00",
      horaFin: "11:00",
      total: 1,
      alumno: "Juanito",
      modalidad: "Presencial",
      apoyoGas: "Si",
      comentarios: "Ninguno",
    },
  ];

  const headers = [
    "Fecha",
    "Día",
    "Hora inicio",
    "Hora fin",
    "Total",
    "Alumno",
    "Modalidad",
    "Apoyo gas",
    "Comentarios",
  ];
  let totalHours = 0;

  return (
    <>
      <div className="h-[100dvh] flex flex-col">
        <HeaderUser 
          handleOpenModal={handleOpenModal}
        />
        <div className=" bg-blue-1/90 h-dvh overflow-x-auto  px-10 relative " >
          <table className="w-[1178px]  border-collapse text-left text-white p-10 xl:w-full">
            <thead className="bg-blue-2 h-10">
              <tr>
                {headers.map((header, index) => (
                  <th
                    scope="col"
                    className="font-normal first:pl-3 last:w-[20%] [&:nth-child(6)]:w-1/5 "
                    key={index}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => {
                const {
                  fecha,
                  dia,
                  horaInicio,
                  horaFin,
                  total,
                  alumno,
                  modalidad,
                  apoyoGas,
                  comentarios,
                } = item;
                totalHours += total;
                return (
                  <tr className="bg-grey h-10" key={index}>
                    <td className="pl-3">{fecha}</td>
                    <td>{dia}</td>
                    <td>{horaInicio}</td>
                    <td>{horaFin}</td>
                    <td>{total}</td>
                    <td>{alumno}</td>
                    <td>{modalidad}</td>
                    <td>{apoyoGas}</td>
                    <td className="whitespace-normal break-words">
                      {comentarios}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-blue-2 h-10">
                <td colSpan={headers.length - 5} className="text-right pr-3">
                  Total:{" "}
                </td>
                <td className="text-left">{totalHours}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <ModalUser
          openModal={openModal}
          closeModal={handleOpenModal}
        />
      </div>
    </>
  );
}
