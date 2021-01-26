import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const login = (username, password) => {
  console.log(`logging in with username ${username} and password ${password}`)
}

const App = (props) => {

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

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

  const onLogin = () => {
    console.log('login')
    // eslint-disable-next-line react/prop-types
    // props.login(username, password)
    login(username, password)
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
      <button type={"button"} onClick={onLogin}>Login</button>
    </div>
  )
}

App.propTypes = {
  login: PropTypes.func
}

App.defaultProps = {
  login: login
}

export default App