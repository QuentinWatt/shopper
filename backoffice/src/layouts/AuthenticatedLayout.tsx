import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import React, { ReactNode } from "react";

const AuthenticatedLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen flex bg-gray-200 overflow-hidden">
      <Navigation />
      <div className="px-5 h-screen overflow-x-auto min-w-[calc(100vw-4rem)] md:min-w-[0] w-full">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
