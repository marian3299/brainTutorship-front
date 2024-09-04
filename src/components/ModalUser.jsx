import { FiX } from "react-icons/fi";
import SubmitButton from "../utils/SubmitButton";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";

export default function ModalUser({ openModal, closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <>
      <div
        className={`flex flex-col bg-blue-1 p-5  fixed inset-0 overflow-x-auto  ${
          openModal ? "visible bg-black/20" : "invisible"
        }`}
      >
        <section className="flex justify-between items-center">
          <h2 className="text-white text-3xl pb-4">Añadir clase</h2>
          <button className="self-start" onClick={closeModal}>
            <FiX className="text-white cursor-pointer text-4xl hover:text-purple" />
          </button>
        </section>

        <hr />
        <div className="flex flex-col justify-center items-center pt-4 w-full ">
          <form
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-4 w-full lg:self-center lg:max-w-[600px]"
          >
            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                {/* DATE */}
                <label htmlFor="date">Fecha</label>
                {errors.date && (
                  <span className="text-red-600 font-semibold text-xs mb-1">
                    *{errors.date.message}
                  </span>
                )}
                <input
                  type="date"
                  className="input input-modal"
                  {...register("date", {
                    required: {
                      value: true,
                      message: "La fecha es obligatoria",
                    },
                  })}
                />
              </div>

              <div className="flex flex-col gap-1 lg:flex-1">
                {/* DAY */}
                <label htmlFor="day">Dia </label>
                {errors.day && (
                  <span className="text-red-600 font-semibold text-xs mb-1">
                    *{errors.day.message}
                  </span>
                )}
                <input
                  type="text"
                  className="input input-modal"
                  {...register("day", {
                    required: {
                      value: true,
                      message: "El dia es obligatorio",
                    },
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                {/* HORA INICIO */}
                <label htmlFor="hora_inicio">Hora inicio</label>
                {errors.hora_inicio && (
                  <span className="text-red-600 font-semibold text-xs mb-1">
                    *{errors.hora_inicio.message}
                  </span>
                )}
                <input
                  type="time"
                  className="input input-modal"
                  {...register("hora_inicio", {
                    required: {
                      value: true,
                      message: "La hora de inicio es obligatoria",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col gap-1 lg:flex-1">
                {/* HORA FIN */}
                <label htmlFor="hora_fin">Hora fin</label>
                {errors.hora_fin && (
                  <span className="text-red-600 font-semibold text-xs mb-1">
                    *{errors.hora_fin.message}
                  </span>
                )}
                <input
                  type="time"
                  className="input input-modal"
                  {...register("hora_fin", {
                    required: {
                      value: true,
                      message: "La hora fin es obligatoria",
                    },
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row text-white gap-4 lg:justify-between">
              <div className="flex flex-col gap-1 lg:flex-1">
                {/* ALUMNO */}
                <label htmlFor="alumno">Alumno</label>
                <select className="input input-modal" {...register("alumno")}>
                  <option value="juanito">Juanito</option>
                  <option value="mariana">Mariana</option>
                  <option value="pedro">Pedro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 lg:flex-1">
                {/* APOYO GAS */}
                <label htmlFor="apoyo_gas">Apoyo gas</label>
                {errors.apoyo_gas && (
                  <span className="text-red-600 font-semibold text-xs mb-1">
                    *{errors.apoyo_gas.message}
                  </span>
                )}
                <input
                  type="number"
                  className="rounded-2xl border-2 border-solid border-purple bg-grey p-2 placeholder-white"
                  {...register("apoyo_gas", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col text-white">
              {/* MODALIDAD */}
              <label>Modalidad</label>
              {errors.modalidad && (
                <span className="text-red-600 font-semibold text-xs mb-1">
                  *{errors.modalidad.message}
                </span>
              )}
              <div className="flex gap-10">
                <p>
                  <input
                    type="radio"
                    id="presencial"
                    value="presencial"
                    {...register("modalidad", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <label htmlFor="presencial" className="pl-3">
                    Presencial
                  </label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="virtual"
                    value="virtual"
                    {...register("modalidad", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <label htmlFor="virtual" className="pl-3">
                    Virtual
                  </label>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:flex-1">
              {/* COMENTARIOS */}
              <label htmlFor="comentarios" className="text-white">
                Comentarios
              </label>
              <textarea
                cols="30"
                rows="10"
                className="input input-modal "
                {...register("comentarios")}
              ></textarea>
            </div>

            <SubmitButton>Añadir</SubmitButton>
            <Button onClick={closeModal}>Cancelar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
