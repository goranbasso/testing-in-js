import React from 'react'
import PropTypes from "prop-types"

const App = (props) => {
  return (
    <div>
      Snapshot test
      <span>{props.message}</span>
    </div>
  )
}

App.propTypes = {
  message: PropTypes.string
}

App.defaultProps = {
  message: "hei hei hei"
}

export default App