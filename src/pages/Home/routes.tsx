import { UserGroupIcon } from "@heroicons/react/24/outline";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import { Navigate } from "react-router-dom";

import Page404 from "./404";
import Admins from "./Admins";
import Charts from "./Analytics";
import Billing from "./Billing";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Team from "./Team";
import Transactions from "./Transactions";
import Users from "./Users";
import Welcome from "./Welcome";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const appRoutes = [
  { path: "", element: <Welcome /> },
  {
    path: "dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    element: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "admins",
    icon: <UsersIcon className={iconClasses} />,
    name: "Admins",
    element: <Admins />,
  },
  {
    path: "users",
    icon: <UserGroupIcon className={iconClasses} />,
    name: "users",
    element: <Users />,
  },
  {
    path: "transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Transactions",
    element: <Transactions />,
  },
  {
    path: "charts",
    icon: <ChartBarIcon className={iconClasses} />,
    name: "Analytics",
    element: <Charts />,
  },

  {
    path: "integration",
    icon: <BoltIcon className={iconClasses} />,
    name: "Integration",
    element: <div className="text-center ">We Come Back Very Soon!!</div>,
  },
  {
    path: "calendar",
    icon: <CalendarDaysIcon className={iconClasses} />,
    name: "Calendar",
    element: <Calendar />,
  },

  {
    path: "",
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: "Pages",
    children: [
      {
        path: "login",
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: "Login",
        element: <Navigate replace to="/login" />,
      },
      {
        path: "register",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Register",
        element: <Navigate replace to="/register" />,
      },
      {
        path: "forget-password",
        icon: <KeyIcon className={submenuIconClasses} />,
        name: "Forgot Password",
        element: <Navigate replace to="/forget-password" />,
      },
      {
        path: "404",
        icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
        name: "404",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "",
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
    name: "Settings",
    children: [
      {
        path: "settings-profile",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
        element: <Profile />,
      },
      {
        path: "settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
        element: <Billing />,
      },
      {
        path: "settings-team",
        icon: <UsersIcon className={submenuIconClasses} />,
        name: "Team Members",
        element: <Team />,
      },
    ],
  },
];

export default appRoutes;
