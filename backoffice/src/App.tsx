import React from "react";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="h-screen flex bg-gray-200 overflow-hidden">
      <Navigation />
      <div className="px-5 w-full h-screen overflow-x-auto">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
