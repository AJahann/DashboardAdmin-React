import Layouts from "./layouts/Layouts";
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
    path: "/app",
    element: <Layouts />,
    children: appRoutes,
  },
  {
    path: "*",
    element: (
      <h1 className="text-3xl text-center mt-10">
        What you are looking for does not exist
      </h1>
    ),
  },
];

export default mainRoutes;
