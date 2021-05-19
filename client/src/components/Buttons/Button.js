import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle :
  STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
    type={type}>
      {children}
      <a href="/jobForm"><button id="add-new-visit"><i class="fas fa-edit fa-2x"></i></button></a>
    </button>
  
  )
};
