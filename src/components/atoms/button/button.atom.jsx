import React from "react";
import PropTypes from "prop-types";

import "./button.styles.scss";

const Button = ({ children, disabled, type, onClick }) => (
  <button className="button" type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: "button",
};

export default Button;
