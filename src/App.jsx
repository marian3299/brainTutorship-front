import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
