import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const login = (username, password) => {
  // console.log(`logging in with username ${username} and password ${password}`)
  return (username != null && username.length > 0) || (password != null && password.length > 0)
}

export const redirect = () => {
  console.log('login successful, redirecting...')
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

  const onLoginClicked = () => {
    // console.log('login')
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
  login: PropTypes.func,
  redirect: PropTypes.func
}

App.defaultProps = {
  login: login,
  redirect: redirect
}

export default App