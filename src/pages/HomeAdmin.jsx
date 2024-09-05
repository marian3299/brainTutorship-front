import { Outlet, useLocation } from "react-router-dom";
import AsideAdmin from "../components/AsideAdmin";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const HomeAdmin = () => {
  const location = useLocation();
  const [asideOpen, setAsideOpen] = useState(false);

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen);
  };

  const closeAside = () => setAsideOpen(false);

  let pageTitle;
  switch (location.pathname) {
    case "/homeAdmin/clases":
      pageTitle = "Clases";
      break;
    case "/homeAdmin/maestros":
      pageTitle = "Maestros";
      break;
    case "/homeAdmin/alumnos":
      pageTitle = "Alumnos";
      break;
    default:
      pageTitle = "Panel de Administración"; // Título por defecto
  }
  return (
    <div>
      <AsideAdmin
        asideOpen={asideOpen}
        handleAsideOpen={handleAsideOpen}
        closeAside={closeAside}
      />
      <div className="w-full bg-blue-1/90 px-4 pt-4 flex lg:hidden">
        <button className="lg:hidden text-3xl" onClick={handleAsideOpen}>
          <AiOutlineMenu className="text-white" />
        </button>
        <h2 className="text-white text-3xl ms-3">{pageTitle}</h2>
      </div>

      <Outlet />
    </div>
  );
};

export default HomeAdmin;
