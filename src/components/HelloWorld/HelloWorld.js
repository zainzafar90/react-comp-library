import React from "react";
import PropTypes from "prop-types";

/** My super-lame component  */
const HelloWorld = ({ message }) => <div>Hello World: {message}</div>;

HelloWorld.propTypes = {
  /** Message to be displayed */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
}

export default HelloWorld;
