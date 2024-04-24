import SubmitButton from "../utils/SubmitButton";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col bg-blue-1 h-[100dvh] items-center justify-center gap-3">
      <h1 className="text-white text-4xl mb-12 font-bold">Crear cuenta</h1>
      <form action="">
        <div className="flex flex-col items-center justify-center gap-4">
          <input type="text" placeholder="Nombre" className="input" />
          <input type="text" placeholder="Apellido" className="input" />
          <input type="text" placeholder="Correo" className="input" />
          <input type="password" placeholder="Contraseña" className="input" />
          <input type="password" placeholder="Repetir contraseña" className="input" />
          <SubmitButton>REGISTRARSE</SubmitButton>
        </div>
      </form>
      <Link to="/">
        <a href="" className="text-white underline font-light">
          ¿Ya tienes una cuenta? Ingrese aquí
        </a>
      </Link>
    </div>
  );
}
