import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import ModalUser from "./components/ModalUser";


function App() {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <HomeUser /> },
    { path: "/modal", element: <ModalUser /> },

  ]);

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
