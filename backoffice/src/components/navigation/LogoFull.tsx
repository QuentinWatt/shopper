import React from "react";
import SquareLogo from "./LogoSquare";

const LogoFull: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 30, height = 30 }) => {
  return (
    <span data-testid="shopper-full-logo" className="flex items-center">
      <SquareLogo width={width} height={height} />
      <span className="ml-3 font-bold text-2xl">Shopper</span>
    </span>
  );
};

export default LogoFull;
