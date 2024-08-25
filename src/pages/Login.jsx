import { useForm } from "react-hook-form";
import SubmitButton from "../utils/SubmitButton";
import { Link } from "react-router-dom";

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},

  } = useForm();

  const onSubmit = handleSubmit( data => {
    console.log(data)
  })

  return (
    <>
      <div className="bg-blue-1 h-[100dvh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-white text-4xl mb-12 font-bold">Iniciar sesión</h1>
        <form onSubmit={onSubmit} noValidate >
          <div className="flex flex-col gap-4 items-center justify-center">
          {errors.email && (
              <span className="text-red-600 font-semibold text-xs mb-1">
                *{errors.email.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Correo"
              className="input  w-80"
              id="correo"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido"
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo no valido",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 font-semibold text-xs mb-1">
                *{errors.password.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Contraseña"
              className="input  w-80"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida"
                }
              })}
            />
            <SubmitButton>Iniciar sesión</SubmitButton>
          </div>
        </form>

        <Link to="/register" className="text-white underline font-light">
          ¿No tienes cuenta? Registrate aquí
        </Link>
      </div>
    </>
  );
}
