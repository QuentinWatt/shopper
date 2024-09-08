import React from "react";

type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<InputProps> = ({
  id,
  label,
  placeholder = "",
  onChange = () => {},
  value = "",
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold block">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        name={id}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        className="rounded"
      />
    </>
  );
};

export default TextInput;
