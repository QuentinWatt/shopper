import React from "react";
import { Link } from "react-router-dom";
import SquareLogo from "./SquareLogo";

const FullLogo: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 30, height = 30 }) => {
  return (
    <Link to="/" data-testid="shopper-full-logo" className="flex items-center">
      <SquareLogo width={width} height={height} />
      <span className="ml-3 font-bold text-2xl">Shopper</span>
    </Link>
  );
};

export default FullLogo;
