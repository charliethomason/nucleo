import React from "react";
import PropTypes from "prop-types";
import { classNames } from "src/utils/classnames";

export const Dropdown = ({
  options = [],
  onClick
}) => {
  const optionsWithIds = options.map((opt, i) => {
    const optionId = `dropdown-opt--${i}`;
    if (typeof opt === "string") {
      return { id: optionId, label: opt, value: opt };
    }
    if (typeof opt === "object") {
      const { label, value, ...rest } = opt;
      return { id: optionId, label, value, ...rest };
    }
  });
  return (
    <>
      <div className="dropdown-container">
        <ul className="dropdown-list">
          {optionsWithIds.map(opt => (
            <li
              key={opt.id}
              className={classNames("dropdown-option", {
                "dropdown-option--disabled": opt.disabled 
              })}
              onClick={() => !opt.disabled ? onClick(opt.value) : onClick()}
            >
              <span>{opt.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown-screen" onClick={() => onClick()} />
    </>
  );
}
Dropdown.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func
};
