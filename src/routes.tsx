import { Link } from "react-router-dom";

import Layouts from "./layouts/layouts";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import appRoutes from "./pages/Home/routes";

const mainRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/panel",
    element: <Layouts />,
    children: appRoutes,
  },
  {
    path: "*",
    element: (
      <div className="w-full">
        <h1 className="text-3xl text-center mt-10">
          What you are looking for does not exist
        </h1>
        <div className="flex justify-center mt-9 items-center w-full">
          <h2 className="text-2xl underline text-blue-600">
            <Link to="/dashboard">Go to dashboard</Link>
          </h2>
        </div>
      </div>
    ),
  },
];

export default mainRoutes;
