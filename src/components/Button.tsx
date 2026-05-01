import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "gradient";
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export const Button = ({
  variant = "gold",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-bold transition-all hover:scale-105 active:scale-95 shadow-xl rounded-full tracking-wide inline-flex items-center justify-center text-center";
  
  const variants = {
    gold: "bg-[#DEA84B] text-black hover:bg-[#BF9353]",
    gradient: "bg-gradient-to-r from-[#FCC067] to-[#DB9940] text-black",
  };

  const variantStyles = variants[variant];
  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} style={props.style as React.CSSProperties}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};


