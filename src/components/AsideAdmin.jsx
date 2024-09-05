import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const AsideAdmin = ({ asideOpen, handleAsideOpen, closeAside }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 w-52 h-screen lg:block ${
          asideOpen ? "block z-40" : "hidden"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-1">
          <div className="flex items-center mb-2 p-2">
            <h3 className="text-white  text-xl">BrainTutorship</h3>
            <button onClick={handleAsideOpen}>
              <IoClose className="text-white text-3xl ml-2" />
            </button>
          </div>

          <ul className="text-white">
            <li>
              <Link
                to="/homeAdmin/clases"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
                onClick={closeAside}
              >
                <LiaChalkboardTeacherSolid className="text-3xl" />
                <span className="ms-3">Clases</span>
              </Link>
            </li>
            <li>
              <Link
                to="/homeAdmin/maestros"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
                onClick={closeAside}
              >
                <PiChalkboardTeacherLight className="text-3xl" />
                <span className="ms-3">Maestros</span>
              </Link>
            </li>
            <li>
              <Link
                to="/homeAdmin/alumnos"
                className="flex items-center p-2 rounded-lg hover:bg-grey"
                onClick={closeAside}
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
