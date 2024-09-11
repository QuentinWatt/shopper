import React from "react";

type InputProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<InputProps> = ({
  id,
  label,
  placeholder = "",
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold block">
        {label}
      </label>
      <input
        {...props}
        id={id}
        type="text"
        placeholder={placeholder}
        name={id}
        className="rounded-lg"
      />
    </>
  );
};

export default TextInput;
