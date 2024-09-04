import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";

const AsideAdmin = () => {
  return (
    <>
      <button className="lg:hidden">
        <AiOutlineMenu />
      </button>
      <aside className="fixed top-0 left-0 w-64 h-screen hidden lg:block">
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-1">
          <h3 className="text-white mb-2 p-2 text-xl">BrainTutorship</h3>
          <ul className="text-white">
            <li>
              <Link
                to="/homeAdmin/clases"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
              >
                <LiaChalkboardTeacherSolid className="text-3xl" />
                <span className="ms-3">Clases</span>
              </Link>
            </li>
            <li>
              <Link
                to="/homeAdmin/maestros"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
              >
                <PiChalkboardTeacherLight className="text-3xl" />
                <span className="ms-3">Maestros</span>
              </Link>
            </li>
            <li>
              <Link
                to="/homeAdmin/alumnos"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
              >
                <PiStudent className="text-3xl" />
                <span className="ms-3">Alumnos</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideAdmin;
