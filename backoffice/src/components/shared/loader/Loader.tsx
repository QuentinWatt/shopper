import React from "react";

const Loader: React.FC<{
  className?: string;
  borderWidth?: number;
  width?: number;
  height?: number;
  color?: string;
}> = ({
  className,
  width = 24,
  height = 24,
  color = "#000",
  borderWidth = 4,
}) => {
  return (
    <span
      className={`loader ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: `${borderWidth}px solid ${color}`,
        borderBottomColor: "transparent",
      }}
    ></span>
  );
};

export default Loader;
