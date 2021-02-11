import React, { useEffect, useState } from "react";

const getAllUsers = async () => {
  const usersResponse = await fetch('/users')
  return usersResponse.json()
}

const getAllApps = async () => {
  const appsResponse = await fetch('/apps')
  return appsResponse.json()
}

const createNewUser = async (id, name, username) => {
  const newUser = {id: id, name: name, username: username}
  await fetch('users', {
    method: 'post',
    body: JSON.stringify(newUser)
  })
}

const App = () => {
  const [users, setUsers] = useState([])
  const [apps, setApps] = useState([])
  const [newName, setNewName] = useState('')
  const [newUsername, setNewUsername] = useState('')

  let mounted = false
  const fetchData = async () => {
    const users = await getAllUsers()
    const apps = await getAllApps()
    if (mounted) {
      setUsers(users)
      setApps(apps)
    }
  }

  useEffect(() => {
    mounted = true
    fetchData()
    return () => mounted = false
  }, [])

  const onAddNewUser = async () => {
    await createNewUser(0, newName, newUsername)
    setUsers(await getAllUsers())
  }

  const onNewNameChanged = (event) => {
    setNewName(event.target.value)
  }

  const onNewUsernameChanged = (event) => {
    setNewUsername(event.target.value)
  }

  return (
    <div>
      <h1>Our fantastic users:</h1>
      <ul>
        {
          users.map(user =>
            <li key={user.name}>
              <p>{user.name} - {user.username}</p>
            </li>)
        }
      </ul>
      <h1>Our amazing apps:</h1>
      <ul>
        {
          apps.map(app =>
            <li key={app.name}>
              <p>{app.name}</p>
            </li>)
        }
      </ul>
      <h1>Add new user:</h1>
      <label htmlFor={"new-name"}>Name</label>
      <input id={"new-name"} value={newName} onChange={onNewNameChanged}/>
      <br />
      <label htmlFor={"new-username"}>Username</label>
      <input id={"new-username"} value={newUsername} onChange={onNewUsernameChanged}/>
      <br />
      <button type={"button"} onClick={onAddNewUser}>Add new user</button>
    </div>
  );
}

export default App
