import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";

import appRoutes from "../pages/Home/routes";
import SidebarSubmenu from "./ui/SideBarSubMenu";

const LeftSideBar = () => {
  const location = useLocation();

  return (
    <div className="drawer-side  z-30  ">
      {/* <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label> */}
      <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to="/app">
            <img
              className="mask mask-squircle w-10"
              src="/logo192.png"
              alt="DashWind Logo"
            />
            Dashboard Admin
          </Link>{" "}
        </li>
        {appRoutes.map((route) => {
          if (!route.name) return null;
          return (
            <li className="" key={route.name}>
              {route.children ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "font-semibold  bg-base-200 " : "font-normal"
                  }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    />
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
