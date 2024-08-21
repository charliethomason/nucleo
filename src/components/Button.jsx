import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils/classnames";
import { SIZES } from "../utils/sizes";

export const Button = ({
  children = "",
  type = "button",
  size = SIZES.default,
  onClick = () => {},
  disabled = false,
  pressed = false,
  className = ""
}) => {
  const btnClasses = classNames("btn", className, {
    [`btn--${size}`]: !!size,
    "pressed": pressed
  });
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={btnClasses}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(Object.values(SIZES)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  className: PropTypes.string
};
