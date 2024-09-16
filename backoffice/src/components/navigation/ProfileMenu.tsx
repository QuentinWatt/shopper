import AuthContext from "@/providers/auth/AuthContext";
import React, { useContext, useState } from "react";
import LogoutButton from "../auth/LogoutButton";
import Panel from "../shared/layout/Panel";
import ClickOutside from "../shared/ClickOutside";

const ProfileMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const closeMenu = () => {
    setIsExiting(true);
    setTimeout(() => {
      setOpen(false);
      setIsExiting(false);
    }, 300);
  };

  return (
    <div className="relative">
      <div
        data-testid="profile-button"
        className="rounded-full bg-slate-900 text-white h-10 w-10 flex items-center justify-center font-bold cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {user?.name.substring(0, 1)}
      </div>
      {isOpen && (
        <ClickOutside
          onClickOutside={() => closeMenu()}
          data-testid="profile-dropdown-menu"
          className={`menu${isExiting ? " menu-exit" : ""}`}
        >
          <Panel className="w-48 shadow">
            <ul>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </Panel>
        </ClickOutside>
      )}
    </div>
  );
};

export default ProfileMenu;
