import EyeIcon from "@/icons/EyeIcon";
import EyeOffIcon from "@/icons/EyeOffIcon";
import React, { useState } from "react";

type PasswordProps = {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput: React.FC<PasswordProps> = ({
  id,
  label,
  placeholder = "password",
  value = "",
  onChange = () => {},
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <div className="flex">
        <input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          className="rounded-l"
        />
        <div
          onClick={() => setVisible(!visible)}
          className="w-10 flex items-center justify-center border border-l-0 rounded-r hover:cursor-pointer"
        >
          {!visible ? (
            <EyeIcon width={24} data-testid="show-password" />
          ) : (
            <EyeOffIcon width={24} data-testid="hide-password" />
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
