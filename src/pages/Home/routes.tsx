import { UserGroupIcon } from "@heroicons/react/24/outline";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
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
import Welcome from "./Welcome";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const appRoutes = [
  { path: "", element: <Welcome /> },
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    element: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "/app/admins",
    icon: <UserGroupIcon className={iconClasses} />,
    name: "Admins",
    element: <Admins />,
  },
  {
    path: "/app/transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Transactions",
    element: <Transactions />,
  },
  {
    path: "/app/charts",
    icon: <ChartBarIcon className={iconClasses} />,
    name: "Analytics",
    element: <Charts />,
  },
  {
    path: "/app/integration",
    icon: <BoltIcon className={iconClasses} />,
    name: "Integration",
    element: <div className="text-center ">We Come Back Very Soon!!</div>,
  },
  {
    path: "/app/calendar",
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
        path: "/app/settings-profile",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
        element: <Profile />,
      },
      {
        path: "/app/settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
        element: <Billing />,
      },
      {
        path: "/app/settings-team",
        icon: <UsersIcon className={submenuIconClasses} />,
        name: "Team Members",
        element: <Team />,
      },
    ],
  },
  {
    path: "",
    icon: <DocumentTextIcon className={`${iconClasses} inline`} />,
    name: "Documentation",
    children: [
      {
        path: "/app/getting-started",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        name: "Getting Started",
      },
      {
        path: "/app/features",
        icon: <TableCellsIcon className={submenuIconClasses} />,
        name: "Features",
      },
      {
        path: "/app/components",
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
        name: "Components",
      },
    ],
  },
];

export default appRoutes;
