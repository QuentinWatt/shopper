import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "./providers/auth/AuthContext";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import GuestLayout from "./layouts/GuestLayout";

const App: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

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
