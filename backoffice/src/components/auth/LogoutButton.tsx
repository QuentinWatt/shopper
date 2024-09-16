import React, { FormEvent, useContext, useState } from "react";
import Button from "../shared/Button";
import { shopperApi } from "@/clients/shopperApi";
import AuthContext from "@/providers/auth/AuthContext";
import { clearCookie } from "@/helpers/cookies";

const LogoutButton: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setToken, setUser } = useContext(AuthContext);

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await shopperApi.post("auth/logout");
    } catch {
      //
    } finally {
      clearCookie("token");
      setToken(null);
      setUser(null);
      setLoading(true);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <Button
        loading={loading}
        className="flex items-center justify-center w-full"
      >
        Logout
      </Button>
    </form>
  );
};

export default LogoutButton;
