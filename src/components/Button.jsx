import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, type, onClick, disabled, className }) => {
  const handleClick = e => {
    if (!disabled && onClick) {
      onClick(e);
    }
  }
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  type: "button",
  className: ""
};
