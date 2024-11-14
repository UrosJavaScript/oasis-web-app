import React from "react";
import "./style.scss";

interface ButtonProps {
  title: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "other";
  padding?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  fontFamily?:
    | "font-primary"
    | "font-header-primary"
    | "font-header-secondary"
    | "font-header-tertiary";
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  onClick,
  variant = "primary", // Default
  padding,
  background,
  border,
  borderRadius,
  color,
  fontFamily = "font-primary",
}) => {
  return (
    <button
      className={`button ${variant} ${fontFamily}`}
      style={{
        padding: padding,
        backgroundColor: background,
        color: color,
        border: border,
        borderRadius: borderRadius,
        ...style,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
