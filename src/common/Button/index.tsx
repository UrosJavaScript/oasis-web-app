import React from "react";
import "./style.scss";

interface ButtonProps {
  title: string;
  style?: React.CSSProperties; // Za prosleđivanje specifičnih stilova
  onClick?: () => void;
  border?: string; // Dodajemo opciju za border
}

const Button: React.FC<ButtonProps> = ({ title, style, onClick, border }) => {
  const customStyle: React.CSSProperties = {
    border: border || "none", // Ako nije prosleđen border, koristi 'none' kao podrazumevano
    ...style,
  };

  return (
    <button className="button" style={customStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
