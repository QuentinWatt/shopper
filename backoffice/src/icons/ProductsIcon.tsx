import React from "react";
import IconProps from "./IconProps";

const ProductsIcon: React.FC<IconProps> = ({
  width = 30,
  height = 30,
  onClick = () => {},
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path d="M11.5 23l-8.5-4.535v-3.953l5.4 3.122 3.1-3.406v8.772zm1-.001v-8.806l3.162 3.343 5.338-2.958v3.887l-8.5 4.534zm-10.339-10.125l-2.161-1.244 3-3.302-3-2.823 8.718-4.505 3.215 2.385 3.325-2.385 8.742 4.561-2.995 2.771 2.995 3.443-2.242 1.241v-.001l-5.903 3.27-3.348-3.541 7.416-3.962-7.922-4.372-7.923 4.372 7.422 3.937v.024l-3.297 3.622-5.203-3.008-.16-.092-.679-.393v.002z" />
    </svg>
  );
};

export default ProductsIcon;
