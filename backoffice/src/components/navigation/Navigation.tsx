import React, { useState } from "react";
import LogoSquare from "./LogoSquare";
import LogoFull from "./LogoFull";
import CaretRightIcon from "@/icons/CaretRightIcon";
import CaretLeftIcon from "@/icons/CaretLeftIcon";
import Menu from "./NavigationMenu";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <aside className="relative h-screen">
      <div className="absolute right-0 top-14 translate-x-3 z-50 text-white">
        <button
          data-testid="menu-expand-button"
          onClick={() => setExpanded(!expanded)}
          className="rounded-full bg-slate-800 hover:bg-blue-600 w-8 h-8 border border-slate-950 flex items-center justify-center transition-all duration-200"
        >
          {!expanded ? (
            <CaretRightIcon className="flex-shrink-0" />
          ) : (
            <CaretLeftIcon className="flex-shrink-0" />
          )}
        </button>
      </div>
      <nav
        className={`h-full transition-all duration-200 bg-slate-900 text-white ${
          expanded ? `w-72` : `w-16`
        } overflow-scroll border-r-1 border-slate-400`}
      >
        <div className="container mx-auto flex flex-col">
          <Link to="/" className="pt-5 px-4">
            {expanded ? <LogoFull /> : <LogoSquare />}
          </Link>

          <Menu expanded={expanded} />
        </div>
      </nav>
    </aside>
  );
};

export default Navigation;
