import React, { ReactNode } from "react";

const Button: React.FC<{
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
