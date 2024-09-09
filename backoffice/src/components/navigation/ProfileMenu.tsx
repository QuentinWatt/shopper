import AuthContext from "@/providers/auth/AuthContext";
import React, { useContext, useState } from "react";
import LogoutButton from "../auth/LogoutButton";

const ProfileMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="relative">
      <div
        data-testid="profile-button"
        className="rounded-full bg-slate-900 text-white h-10 w-10 flex items-center justify-center font-bold cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        {user?.name.substring(0, 1)}
      </div>
      {isOpen && (
        <div
          data-testid="profile-dropdown-menu"
          className="absolute top-12 right-0"
        >
          <div className="w-48 bg-white border rounded-lg p-3 shadow">
            <ul>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
