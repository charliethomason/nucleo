import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, type, onClick, disabled, className }) => { 
  return (
    <button
      type={type}
      onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  type: "button",
  className: ""
};
