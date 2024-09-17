import React from "react";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="text-center py-12">
        &copy; Shopper {date.getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
