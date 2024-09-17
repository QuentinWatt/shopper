import React from "react";
import LogoFull from "../branding/LogoFull";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center h-16">
        <Link href={"/"}>
          <LogoFull />
        </Link>
        <div>search</div>
        <nav>(profile)</nav>
      </div>
    </header>
  );
};

export default Header;
