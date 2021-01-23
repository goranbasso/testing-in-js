import React, {useEffect, useState} from 'react';

export const ghost = '👻';
export const cat = '😸';

const App = () => {

  const [spooky, setSpooky] = useState([])

  useEffect(() => {
    setSpooky(false)
  }, [])

  const toggleSpooky = () => {
    const randomSpooky = Math.random() >= 0.5
    setSpooky(randomSpooky)
    // setSpooky(!spooky)
  }

  const buttonDisplayText = () => {
    return spooky ? ghost : cat;
  }

  return (
    <div>
      <button onClick={toggleSpooky} type={"button"}>{buttonDisplayText()}</button>
    </div>
  )
}

export default App