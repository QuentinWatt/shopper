import React from "react";
import Loader from "./loader/Loader";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <button {...props} disabled={loading}>
      {loading ? (
        <Loader color="#fff" className="mx-2" width={18} height={18} />
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
