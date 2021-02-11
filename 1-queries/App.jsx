import React from "react"
import PropTypes from "prop-types"

const App = (props) => {
  return (
    <div>
      Hello {props.name} <br />
      Welcome to {props.place}
    </div>)
}

App.propTypes = {
  name: PropTypes.string,
  place: PropTypes.string
}

App.defaultProps = {
  name: "World",
  place: 'other'
}

export default App
