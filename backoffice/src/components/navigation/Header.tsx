import React from "react";
import ProfileMenu from "./ProfileMenu";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0">
      <header
        data-testid="site-header"
        className="flex justify-between items-center border border-gray-300 rounded bg-white p-3"
      >
        <div></div>
        <ProfileMenu />
      </header>
    </div>
  );
};

export default Header;
