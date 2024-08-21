import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils/classnames";
import { uniqueId } from "../utils/uniqueId";
import { SIZES } from "../utils/sizes";

export const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  size = SIZES.default,
  disabled = false,
  className = "",
  maxLength = null,
  id = null,
  errorMessage = null
}) => {
  const hasError = !!errorMessage;
  const errorId = hasError ? uniqueId("input-error-") : null;
  const inputClasses = classNames("textbox", className, {
    [`textbox--${size}`]: !!size,
    "textbox--invalid": hasError
  });
  const inputAttrs = {
    className: inputClasses,
    id,
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    disabled,
    maxLength
  };
  const errorAttrs = {
    "aria-invalid": true,
    "aria-describedby": errorId
  };
  let inputEl;
  if (type === "textarea") {
    inputEl = (
      <textarea
        {...inputAttrs}
        {...(hasError ? errorAttrs : {})}
      />
    )
  } else {
    inputEl = (
      <input
        type={type}
        {...inputAttrs}
        {...(hasError ? errorAttrs : {})}
      />
    );
  }
  return (
    <>
      {inputEl}
      {hasError && (
        <div id={errorId} className="textbox-error">{errorMessage}</div>
      )}
    </>
  );
};
Input.propTypes = {
  type: PropTypes.oneOf(["text", "textarea", "password", "number", "email", "search", "tel"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZES)),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  errorMessage: PropTypes.string
};
