import React from "react";

type TextareaProps = {
  id: string;
  label: string;
  value?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaInput: React.FC<TextareaProps> = ({
  id,
  label,
  value = "",
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <textarea id={id} name={id} value={value} {...props}></textarea>
    </>
  );
};

export default TextareaInput;
