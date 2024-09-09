import React, { FormEvent, useContext, useState } from "react";
import Button from "../shared/Button";
import { shopperApi } from "@/clients/shopperApi";
import AuthContext from "@/providers/auth/AuthContext";

const LogoutButton: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setToken, setUser } = useContext(AuthContext);

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await shopperApi.post("auth/logout");
      setToken(null);
      setUser(null);
    } catch {
      //
    } finally {
      setLoading(true);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <Button loading={loading} className="flex items-center">
        Logout
      </Button>
    </form>
  );
};

export default LogoutButton;
