import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "gradient";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "gold",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-bold transition-all hover:scale-105 active:scale-95 shadow-xl rounded-full tracking-wide";
  
  const variants = {
    gold: "bg-[#DEA84B] text-black hover:bg-[#BF9353]",
    gradient: "bg-gradient-to-r from-[#FCC067] to-[#DB9940] text-black",
  };

  const variantStyles = variants[variant];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
