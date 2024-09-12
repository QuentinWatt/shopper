import React, { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navigation/Header";
import Navigation from "@/components/navigation/Navigation";

const AuthenticatedLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen flex bg-gray-200 overflow-hidden">
      <Navigation />
      <div className="h-screen overflow-x-auto min-w-[calc(100vw-4rem)] md:min-w-[0] w-full">
        <Header />
        <main className="px-5">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
