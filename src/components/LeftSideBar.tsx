import { XMarkIcon } from "@heroicons/react/24/outline";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";

import SidebarSubmenu from "./ui/SideBarSubMenu";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;
const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/leads", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Leads", // name that appear in Sidebar
  },
  {
    path: "/app/transactions", // url
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: "Transactions", // name that appear in Sidebar
  },
  {
    path: "/app/charts", // url
    icon: <ChartBarIcon className={iconClasses} />, // icon component
    name: "Analytics", // name that appear in Sidebar
  },
  {
    path: "/app/integration", // url
    icon: <BoltIcon className={iconClasses} />, // icon component
    name: "Integration", // name that appear in Sidebar
  },
  {
    path: "/app/calendar", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Calendar", // name that appear in Sidebar
  },

  {
    path: "", // no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
    name: "Pages", // name that appear in Sidebar
    submenu: [
      {
        path: "/login",
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: "Login",
      },
      {
        path: "/register", // url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Register", // name that appear in Sidebar
      },
      {
        path: "/forgot-password",
        icon: <KeyIcon className={submenuIconClasses} />,
        name: "Forgot Password",
      },
      {
        path: "/app/blank",
        icon: <DocumentIcon className={submenuIconClasses} />,
        name: "Blank Page",
      },
      {
        path: "/app/404",
        icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
        name: "404",
      },
    ],
  },
  {
    path: "", // no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/settings-profile", // url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      {
        path: "/app/settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
      },
      {
        path: "/app/settings-team", // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: "Team Members", // name that appear in Sidebar
      },
    ],
  },
  {
    path: "", // no url needed as this has submenu
    icon: <DocumentTextIcon className={`${iconClasses} inline`} />, // icon component
    name: "Documentation", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/getting-started", // url
        icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
        name: "Getting Started", // name that appear in Sidebar
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

const LeftSideBar = () => {
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
          <a href="/">
            <img
              className="mask mask-squircle w-10"
              src="/logo192.png"
              alt="DashWind Logo"
            />
            DashWind
          </a>{" "}
        </li>
        {routes.map((route) => {
          return (
            <li className="" key={route.name}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <a
                  href="/"
                  //   className={({ isActive }: boolean) =>
                  //     isActive ? "font-semibold  bg-base-200 " : "font-normal"
                  //   }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
