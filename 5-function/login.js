export const wrongLoginFunction = (username, password) => {
  console.log(`not logging in!`)
  return false
}

export const correctLoginFunction = (username, password) => {
  console.log(`logging in with username ${username} and password ${password}`)
  return (username != null && username.length > 0) || (password != null && password.length > 0)
}
