import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Home from "../../home/Home/Home";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;