import SubmitButton from "../utils/SubmitButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <div className="flex flex-col bg-blue-1 h-[100dvh] items-center justify-center gap-3">
      <h1 className="text-white text-4xl mb-12 font-bold">Crear cuenta</h1>
      <div className="w-[340px]">
        <form onSubmit={onSubmit} noValidate>
          <div className="mb-5">
            {errors.name && (
              <span className="text-red-600 font-semibold text-xs mb-1">
                *{errors.name.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Nombre"
              className="input  w-full text-white"
              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre requerido",
                },
              })}
            />
          </div>

          <div className="mb-5">
            {errors.lastname && (
              <span className="text-red-600 font-semibold text-xs mb-1">
                *{errors.lastname.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Apellido"
              className="input w-full text-white"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Apellido requerido",
                },
              })}
            />
          </div>

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
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida",
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
          </div>

          <div className="mb-5">
            {errors.confirmPassword && (
              <span className="text-red-600 font-semibold text-xs mb-1">
                *{errors.confirmPassword.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Repetir contraseña"
              className="input  w-full text-white"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                validate: (value) => value === watch("password") ? true : "Las contraseñas no coinciden",
              })}
            />
          </div>

          <SubmitButton>REGISTRARSE</SubmitButton>
        </form>
      </div>
      <Link to="/" className="text-white underline font-light">
        ¿Ya tienes una cuenta? Ingrese aquí
      </Link>
    </div>
  );
}
