import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "./providers/auth/AuthContext";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import GuestLayout from "./layouts/GuestLayout";
import { findCookie } from "./helpers/cookies";

const App: React.FC = () => {
  const { isLoggedIn, setToken, setUser } = useContext(AuthContext);

  useEffect(() => {
    setToken(findCookie("token"));
    setUser(JSON.parse(findCookie("user")));
  }, []);

  if (!isLoggedIn()) {
    return <GuestLayout />;
  }

  return (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  );
};

export default App;
