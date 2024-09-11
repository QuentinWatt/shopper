import React from "react";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Panel: React.FC<PanelProps> = ({ children, className, ...props }) => {
  return (
    <div className={`panel ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Panel;
