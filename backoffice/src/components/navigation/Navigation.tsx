import React, { useState } from "react";
import { Link } from "react-router-dom";
import SquareLogo from "./SquareLogo";
import FullLogo from "./FullLogo";
import CaretRightIcon from "@/icons/CaretRightIcon";
import CaretLeftIcon from "@/icons/CaretLeftIcon";

const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="relative h-screen">
      <div className="absolute right-0 top-14 translate-x-3 z-50 text-white">
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-full bg-slate-800 hover:bg-blue-600 w-8 h-8 border border-slate-950 flex items-center justify-center transition-all duration-200"
        >
          {!expanded ? <CaretRightIcon /> : <CaretLeftIcon />}
        </button>
      </div>
      <nav
        className={`h-full transition-all duration-200 bg-slate-900 text-white p-5 ${
          expanded ? `w-72` : `w-16`
        } overflow-scroll border-r border-gray-500`}
      >
        <div className="container mx-auto flex flex-col">
          {expanded ? <FullLogo /> : <SquareLogo />}

          <ul className="mt-10">
            <li className="mr-2">
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
