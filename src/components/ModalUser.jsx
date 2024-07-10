import SubmitButton from "../utils/SubmitButton";
import Button from "../utils/Button";

export default function ModalUser() {
  return (
    <>
      <div className="flex flex-col bg-blue-1 p-5 fixed inset-0 overflow-x-auto m-2">
        <h2 className="text-white text-3xl pb-4">Añadir clase</h2>
        <hr />
        <div className="flex flex-col justify-center items-center pt-4 w-full ">
          <form
            action=""
            className="flex flex-col gap-4 w-full lg:self-center lg:max-w-[600px]"
          >
            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="date">Fecha</label>
                <input
                  type="date"
                  className="input input-modal"
                  name="date"
                  id="date"
                />
              </div>
              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="day">Dia</label>
                <input
                  type="text"
                  name="day"
                  id="day"
                  className="input input-modal"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="hora_inicio">Hora inicio</label>
                <input
                  type="time"
                  name="hora_inicio"
                  id="hora_inicio"
                  className="input input-modal"
                />
              </div>
              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="hora_fin">Hora fin</label>
                <input
                  type="time"
                  name="hora_fin"
                  id="hora_fin"
                  className="input input-modal"
                />
              </div>
            </div>

            {/* <label>Total</label> Calcular total de horas aparte
            <input type="number" name="" id="" className="input input-modal" /> */}
            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="alumno">Alumno</label>
                <select name="alumno" id="alumno" className="input input-modal">
                  <option value="juanito">Juanito</option>
                  <option value="mariana">Mariana</option>
                  <option value="pedro">Pedro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 lg:flex-1">
                <label htmlFor="apoyo_gas">Apoyo gas</label>
                <input
                  type="number"
                  name="apoyo_gas"
                  id="apoyo_gas"
                  className="rounded-2xl border-2 border-solid border-purple bg-grey p-2 placeholder-white"
                />
              </div>
            </div>

            <div className="flex flex-col text-white">
              <label>Modalidad</label>
              <div className="flex gap-10">
                <p>
                  <input
                    type="radio"
                    name="modalidad"
                    id="presencial"
                    value="presencial"
                  />
                  <label htmlFor="presencial" className="pl-3">
                    Presencial
                  </label>
                </p>
                <p>
                  <input
                    type="radio"
                    name="modalidad"
                    id="virtual"
                    value="virtual"
                  />
                  <label htmlFor="virtual" className="pl-3">
                    Virtual
                  </label>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:flex-1">
              <label htmlFor="comentarios" className="text-white">
                Comentarios
              </label>
              <textarea
                name="comentarios"
                id="comentarios"
                cols="30"
                rows="10"
                className="input input-modal "
              ></textarea>
            </div>

            <SubmitButton>Añadir</SubmitButton>
            <Button>Cancelar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
