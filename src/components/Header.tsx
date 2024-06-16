/* eslint-disable jsx-a11y/label-has-associated-control */
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import { openRightDrawer } from "../features/common/rightDrawerSlice";
// import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";

const Header = () => {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState(false); // false => dark
  const [noOfNotifications] = useState(10);

  useEffect(() => {
    if (currentTheme) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "dark");
    }
  }, [currentTheme]);

  return (
    <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
      {/* Menu toogle for mobile view or small screen */}
      <div className="flex-1">
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Bars3Icon className="h-5 inline-block w-5" />
        </label>
        <h1 className="text-2xl font-semibold ml-2 capitalize">
          {location.pathname.split("/")[2] || "Welcome"}
        </h1>
      </div>

      <div className="flex-none ">
        <label className="swap">
          <input
            type="checkbox"
            onClick={() => setCurrentTheme(!currentTheme)}
          />
          <SunIcon
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              !currentTheme ? "swap-on" : "swap-off"
            }`}
          />
          <MoonIcon
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              currentTheme ? "swap-on" : "swap-off"
            }`}
          />
        </label>

        {/* Notification icon */}
        <button className="btn btn-ghost ml-4  btn-circle">
          <div className="indicator">
            <BellIcon className="h-6 w-6" />
            {noOfNotifications > 0 ? (
              <span className="indicator-item badge badge-secondary badge-sm">
                {noOfNotifications}
              </span>
            ) : null}
          </div>
        </button>

        {/* Profile icon, opening menu on click */}
        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="justify-between">
              <a href="/">
                Profile Settings
                <span className="badge">New</span>
              </a>
            </li>
            <li className="">
              <a href="/">Bill History</a>
            </li>
            <div className="divider mt-0 mb-0" />
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
