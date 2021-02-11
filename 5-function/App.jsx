import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {correctLoginFunction, redirectFunction, wrongLoginFunction} from './login'

const App = (props) => {

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [loginSuccess, setLoginSuccess] = useState(false)

  useEffect(() => {
    setUsername('')
    setPassword('')
  }, [])

  const onUsernameChanged = (event) => {
    setUsername(event.target.value)
  }

  const onPasswordChanged = (event) => {
    const obfuscatedPassword = event.target.value.replace(/./g, '*')
    setPassword(obfuscatedPassword)
  }

  const onLoginClicked = () => {
    setLoginSuccess(props.login(username, password))
    if (props.login(username, password)) {
      props.redirect()
    }
  }

  return (
    <div>
      <label>
        Brukernavn:
        <input value={username} onChange={onUsernameChanged} data-testid={"username-input"} />
      </label>
      <br />
      <label>
        Passord:
        <input value={password} onChange={onPasswordChanged} data-testid={"password-input"} />
      </label>
      <br />
      <button type={"button"} onClick={onLoginClicked}>Login</button>
    </div>
  )
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired
}

App.defaultProps = {
  login: correctLoginFunction,
  redirect: redirectFunction
}

export default App