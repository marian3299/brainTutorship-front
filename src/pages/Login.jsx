import SubmitButton from "../utils/SubmitButton";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <div className="bg-blue-1 h-[100dvh] flex flex-col justify-center items-center gap-3">
      <h1 className="text-white text-4xl mb-12 font-bold">Iniciar sesión</h1>
      <form action="">
        <div className="flex flex-col gap-4 items-center justify-center">
          <input type="text" placeholder="Correo" className="input  w-80" />
          <input type="password" placeholder="Contraseña" className="input  w-80" />
          <SubmitButton>Iniciar sesión</SubmitButton>
        </div>
      </form>

      <Link to="/register">
        <a href="" className="text-white underline font-light">¿No tienes cuenta? Registrate aquí</a>
      </Link>
      
    </div>
      
    </>
  );
}
