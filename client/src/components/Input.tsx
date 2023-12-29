import React from "react";
import clsx from "clsx";

interface InputProps {
  label: string;
  required: boolean;
  disabled: boolean;
  placeholder: string;
  error: boolean;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  required,
  disabled,
  placeholder,
  id,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[60%] flex items-start">
        <label
          htmlFor={id}
          className="font-semibold text-gray-500 text-sm leading-6 block text-start"
        >
          {label}
        </label>
      </div>
      <input
        type="email"
        placeholder={placeholder}
        className={clsx(`
        form-input
        w-full 
        lg:w-[60%]
        rounded-md 
        border-0 
        py-1.5 
        text-gray-900 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        placeholder:text-gray-400 
        focus:ring-2 
        focus:ring-inset 
        focus:ring-green-700 
        sm:text-sm 
        sm:leading-6
        block
        `)}
      />
    </div>
  );
};
