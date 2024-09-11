import React, { useRef, useEffect } from "react";

type ClickOutsideProps = {
  children: React.ReactNode;
  onClickOutside: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const ClickOutside: React.FC<ClickOutsideProps> = ({
  children,
  onClickOutside,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default ClickOutside;
