import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
  ]);

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
