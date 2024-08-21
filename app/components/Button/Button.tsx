import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  style = {},
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}`}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
