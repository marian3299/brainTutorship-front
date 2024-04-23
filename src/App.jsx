import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
  ]);

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
