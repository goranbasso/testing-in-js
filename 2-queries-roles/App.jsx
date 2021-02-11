import React from "react"
import PropTypes from "prop-types"

const App = (props) => {
  return (
    <div>
      <p>Hello {props.name}!</p>
      <p>Please sign in.</p>
      <form>
        <label htmlFor="username">Username: </label>
        <input id="username" placeholder="username"/>
        <label htmlFor="password">Password: </label>
        <input id="password" placeholder="password" type="password"/>
        <button>{props.name}</button> <br />
        <a href={props.link}>Cool link</a>
        <a href={props.otherLink}>Other cool link</a>
        <a href={props.anotherLink}>Another cool link</a>
      </form>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  otherLink: PropTypes.string,
  anotherLink: PropTypes.string
}

App.defaultProps = {
  name: "Sign in",
  link: "https://www.google.com",
  otherLink: "https://www.nrk.no",
  anotherLink: "https://developer.mozilla.org"
}

export default App
