import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navigation: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white min-w-72 p-5 overflow-scroll">
      <div className="container mx-auto flex flex-col">
        <Logo />
        <nav className="mt-5">
          <ul>
            <li className="mr-2">
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
