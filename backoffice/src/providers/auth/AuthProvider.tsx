import React, { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";
import User from "@/models/User";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const isLoggedIn = (): boolean => token !== null || user !== null;

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
