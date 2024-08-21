import React, { useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "src/utils/classnames";
import { Button } from "../Button";
import { Dropdown } from "./Dropdown";

export const DropdownButton = ({
  children = "",
  options = [],
  onClick = () => {}
}) => {
  const [show, setShow] = useState(false);
  const handleSelect = value => {
    setShow(false);
    if (value && onClick) {
      onClick(value);
    }
  };
  return (
    <div className="dropdown-btn">
      <Button onClick={() => setShow(!show)}>
        {children}
        <span
          className={classNames("dropdown-btn-icon", {
            "dropdown-btn-icon--active": show
          })}
        />
      </Button>
      {show && (
        <Dropdown options={options} onClick={handleSelect} />
      )}
    </div>
  );
}
DropdownButton.propTypes = {
  children: PropTypes.any,
  options: PropTypes.bool,
  onClick: PropTypes.func
};
