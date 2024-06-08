import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { useState } from "react";

interface SidebarSubmenuProps {
  name: string;
  icon: JSX.Element;
  submenu: {
    path: string;
    icon: JSX.Element;
    name: string;
  }[];
}

const SidebarSubmenu = ({ submenu, name, icon }: SidebarSubmenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      {/** Route header */}
      <div className="w-full block" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {name}
        <ChevronDownIcon
          className={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/** Submenu list */}
      <div className={` w-full ${isExpanded ? "" : "hidden"}`}>
        <ul className="menu menu-compact">
          {submenu.map((m) => {
            return (
              <li key={m.name}>
                <a href={m.path}>
                  {m.icon} {m.name}
                  {location.pathname === m.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSubmenu;
