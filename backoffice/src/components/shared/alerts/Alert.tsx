import InfoIcon from "@/icons/InfoIcon";
import React, { ReactNode } from "react";

const Alert: React.FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`alert${className ? ` ${className}` : ""}`} {...props}>
      <InfoIcon className="mr-2" />
      {children}
    </div>
  );
};

export default Alert;
