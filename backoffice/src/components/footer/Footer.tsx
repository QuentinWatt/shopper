import React from "react";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center">&copy; Shopper {date.getFullYear()}</div>
    </footer>
  );
};

export default Footer;
