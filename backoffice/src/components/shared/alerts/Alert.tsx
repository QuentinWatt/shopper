import InfoIcon from "@/icons/InfoIcon";
import React, { ReactNode } from "react";

type AlertProps = {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Alert: React.FC<AlertProps> = ({ className, children, ...props }) => {
  return (
    <div className={`alert${className ? ` ${className}` : ""}`} {...props}>
      <InfoIcon className="mr-2" />
      {children}
    </div>
  );
};

export default Alert;
