import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  return <div>Hello {props.name}</div>;
}

App.propTypes = {
  name: PropTypes.string,
}

App.defaultProps = {
  name: "Borld",
}

export default App
