import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "./providers/auth/AuthContext";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import GuestLayout from "./layouts/GuestLayout";
import { findCookie } from "./helpers/cookies";
import ToastProvider from "./components/shared/toasts/ToastProvider";

const App: React.FC = () => {
  const { isLoggedIn, setToken, setUser } = useContext(AuthContext);

  useEffect(() => {
    setToken(findCookie("token"));
    setUser(JSON.parse(findCookie("user")));
  }, [setToken, setUser]);

  return (
    <ToastProvider>
      {!isLoggedIn() ? (
        <GuestLayout />
      ) : (
        <AuthenticatedLayout>
          <Outlet />
        </AuthenticatedLayout>
      )}
    </ToastProvider>
  );
};

export default App;
