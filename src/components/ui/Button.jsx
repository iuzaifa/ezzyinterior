import React from "react";

// Or plain Tailwind variants
const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
  className = "",
  ...props
}) => {
  const base =
    "font-medium rounded-full shadow-lg transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#243f04] to-[#243f04] text-[#FEFAE0] hover:scale-105 hover:shadow-xl px-6 py-3",
    secondary:
      "bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 text-[#FEFAE0] backdrop-blur-sm hover:scale-105 hover:shadow-xl px-6 py-3",
    outline:
      "border border-[#1a1423]/50 text-[#283618] hover:scale-105 hover:bg-[#FEFAE0]/50 hover:shadow-xl px-6 py-3",
    contact:
      "bg-[#DDA15E] hover:bg-[#BC6C25] hover:scale-105 text-[#FEFAE0] shadow-lg hover:shadow-xl px-4 py-2 md:px-6 md:py-3",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClass =
    `${base} ${variants[variant]} ${sizes[size]} ${className} ${props.fullWidth ? "w-full" : ""}`.trim();

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
