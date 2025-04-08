import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({ children, className, type = "button", disabled = false }: ButtonProps) {
  return (
      <button
          type={type}
          disabled={disabled}
          className={`w-full h-16 text-xl leading-8 font-bold rounded-[12px] hover:opacity-90 transition-opacity ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        {children}
      </button>
  );
}
