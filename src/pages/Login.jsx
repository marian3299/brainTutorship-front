import { useForm } from "react-hook-form";
import SubmitButton from "../utils/SubmitButton";
import { Link } from "react-router-dom";

export default function Login() {
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
      <div className="bg-blue-1 h-[100dvh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-white text-4xl mb-12 font-bold">Iniciar sesión</h1>
        <div className="w-[340px]">
          <form onSubmit={onSubmit} noValidate>
            <div className="mb-5">
              {errors.email && (
                <span className="text-red-600 font-semibold text-xs mb-1">
                  *{errors.email.message}
                </span>
              )}
              <input
                type="text"
                placeholder="Correo"
                className="input  w-full text-white"
                id="correo"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email requerido",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo no valido",
                  },
                })}
              />
            </div>

            <div className="mb-5">
              {errors.password && (
                <span className="text-red-600 font-semibold text-xs mb-1">
                  *{errors.password.message}
                </span>
              )}
              <input
                type="password"
                placeholder="Contraseña"
                className="input  w-full text-white"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña requerida",
                  },
                })}
              />
            </div>

            <SubmitButton>Iniciar sesión</SubmitButton>
          </form>
        </div>

        <Link to="/register" className="text-white underline font-light">
          ¿No tienes cuenta? Registrate aquí
        </Link>
      </div>
    </>
  );
}
