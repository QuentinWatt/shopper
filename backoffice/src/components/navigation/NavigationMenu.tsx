import DashboardIcon from "@/icons/DashboardIcon";
import ProductsIcon from "@/icons/ProductsIcon";
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  testId: string;
  path: string;
  label: string;
  icon: ReactNode;
}

const menuItems: MenuItem[] = [
  {
    testId: "dashboard",
    path: "/",
    label: "Dashboard",
    icon: <DashboardIcon width={30} height={30} className="flex-shrink-0" />,
  },
  {
    testId: "products",
    path: "/products",
    label: "Products",
    icon: <ProductsIcon width={30} height={30} className="flex-shrink-0" />,
  },
];

const NavigationMenu: React.FC<{ expanded: boolean }> = ({ expanded }) => {
  const { pathname } = useLocation();

  const isActive = (path: string): boolean => {
    return pathname == path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <ul className="mt-10">
      {menuItems.map((item) => (
        <li
          key={item.path}
          data-testid={item.testId}
          className={`hover:border-r-8 border-blue-500 hover:bg-slate-700${
            isActive(item.path)
              ? " bg-slate-700 border-r-8 border-blue-500"
              : ""
          }`}
        >
          <Link to={item.path} className="flex p-3 items-center">
            {item.icon}
            <span className="ml-3">{expanded ? item.label : <></>}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
