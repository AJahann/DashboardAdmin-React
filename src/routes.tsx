import Layouts from "./layouts/layouts";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Page404 from "./pages/Home/404";
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
    element: <Page404 />,
  },
];

export default mainRoutes;
