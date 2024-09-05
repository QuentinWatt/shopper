import React from "react";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="py-6">
      <div className="text-center text-sm">
        &copy; Shopper {date.getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
