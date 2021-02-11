import React, { useEffect, useState } from "react";

const getAllUsers = async () => {
  const usersResponse = await fetch('/users')
  return usersResponse.json()
}

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      const users = await getAllUsers()
      if (mounted) {
        setUsers(users)
      }
    }
    fetchData()
    return () => mounted = false
  }, [])

  return (
    <div>
      <h1>Our fantastic users:</h1>
      <ul>
        {
          users.map(user => <li key={user.name}><p>{user.name}</p></li>)
        }
      </ul>
    </div>
  );
}

export default App
