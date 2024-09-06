import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 32, height = 32 }) => {
  return (
    <Link to="/" data-testid="shopper-full-logo" className="flex items-center">
      <svg
        data-testid="shopper-square-logo"
        width={width}
        height={height}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        className="iconify iconify--twemoji"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#3B88C3"
          d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"
        ></path>
        <path
          fill="#FFF"
          d="M24.125 9.652c0 1.209-.806 2.294-2.076 2.294c-1.271 0-2.264-.93-4.125-.93c-1.333 0-2.542.713-2.542 2.016c0 3.193 10.357 1.147 10.357 9.146c0 4.434-3.659 7.193-7.938 7.193c-2.388 0-7.534-.558-7.534-3.473c0-1.209.806-2.201 2.077-2.201c1.457 0 3.193 1.209 5.209 1.209c2.046 0 3.163-1.147 3.163-2.667c0-3.658-10.356-1.457-10.356-8.65c0-4.341 3.565-7.038 7.689-7.038c1.736.001 6.076.652 6.076 3.101z"
        ></path>
      </svg>
      <span className="ml-3 font-bold text-2xl">Shopper</span>
    </Link>
  );
};

export default Logo;
