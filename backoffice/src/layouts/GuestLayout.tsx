import LoginForm from "@/components/auth/LoginForm";
import Footer from "@/components/footer/Footer";
import LogoFull from "@/components/navigation/LogoFull";
import React from "react";

const GuestLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-gray-200">
      <header className="h-16 bg-slate-800 w-full flex items-center justify-center text-white">
        <LogoFull />
      </header>
      <div>
        <main>
          <LoginForm />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default GuestLayout;
