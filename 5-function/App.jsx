import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

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
    console.log('login')
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
  login: PropTypes.func.isRequired
}

export default App