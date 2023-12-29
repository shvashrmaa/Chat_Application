import clsx from "clsx";
import React from "react";

interface IButtonProps {
  onclick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
  secondary: boolean;
  danger: boolean;
  Variant: "LOGIN" | "REGISTER";
}

const Button: React.FC<IButtonProps> = ({
  onclick,
  type,
  disabled,
  secondary,
  danger,
  Variant,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={onclick}
        type={type}
        disabled={disabled}
        className={clsx(
          `
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        w-full
        lg:w-[60%]
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
          disabled && "opacity-50 cursor-default",
          secondary ? "text-gray-900" : "text-white",
          danger &&
            "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
          !secondary &&
            !danger &&
            "bg-green-700 hover:bg-green-800 focus-visible:outline-green-700"
        )}
      >
        {Variant === "LOGIN" ? "LOGIN" : "REGISTER"}
      </button>
    </div>
  );
};

export default Button;
