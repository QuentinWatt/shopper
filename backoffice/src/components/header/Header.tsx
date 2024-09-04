import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div>Backoffice</div>
        <nav>
          <ul className="flex">
            <li className="mr-2">
              <Link to="/">Home</Link>
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

export default Header;
