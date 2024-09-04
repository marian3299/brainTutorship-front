import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import HomeAdmin from "./pages/HomeAdmin";
import AdminClases from "./pages/AdminClases";
import AdminAlumnos from "./pages/AdminAlumnos";
import AdminMaestros from "./pages/AdminMaestros";

function App() {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <HomeUser /> },
    {
      path: "/homeAdmin",
      element: <HomeAdmin />,
      children: [
        { path: "clases", element: <AdminClases /> },
        { path: "maestros", element: <AdminMaestros /> },
        { path: "alumnos", element: <AdminAlumnos /> },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}

export default App;
