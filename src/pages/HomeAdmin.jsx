import { Outlet } from "react-router-dom";
import AsideAdmin from "../components/AsideAdmin";

const HomeAdmin = () => {
  return (
    <div>
      <AsideAdmin />
      <Outlet />
    </div>
  );
};

export default HomeAdmin;
