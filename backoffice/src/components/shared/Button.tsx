import React, { ReactNode } from "react";
import Loader from "./loader/Loader";

const Button: React.FC<{
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}> = ({ children, loading, ...props }) => {
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
