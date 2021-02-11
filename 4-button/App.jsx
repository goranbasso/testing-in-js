import React, {useEffect, useState} from 'react'

export const ghost = '👻'
export const cat = '😸'

const App = () => {

  const [spooky, setSpooky] = useState([])

  useEffect(() => {
    setSpooky(false)
  }, [])

  const toggleSpooky = () => {
    setSpooky(!spooky)
  }

  const setSpookyExplicit = (state) => {
    setSpooky(state)
  }

  const buttonDisplayText = () => {
    return spooky ? ghost : cat
  }

  return (
    <div>
      <button onClick={toggleSpooky} type={"button"} data-testid={"spooky-button"}>{buttonDisplayText()}</button>
      <br />
      <button onClick={() => setSpookyExplicit(false)} type={"button"} data-testid={"spooky-false-button"}>{cat}</button>
      <button onClick={() => setSpookyExplicit(true)} type={"button"} data-testid={"spooky-true-button"}>{ghost}</button>
    </div>
  )
}

export default App