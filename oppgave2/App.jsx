import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  return (
    <div>
    Hello {props.name}
      <button>{props.name}</button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
}

App.defaultProps = {
  name: "World",
}

export default App
