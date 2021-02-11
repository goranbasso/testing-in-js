import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const App = (props) => {

  const [paramA, setParamA] = useState([])
  const [paramB, setParamB] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    setParamA('0')
    setParamB('0')
  }, [])

  const onParamAChanged = (event) => {
    setParamA(event.target.value)
  }

  const onParamBChanged = (event) => {
    setParamB(event.target.value)
  }

  const onCalculate = () => {
    const calculated = props.calculate(paramA, paramB)
    setResult(calculated)
  }

  return (
    <div>
      <label>
        Param A:
        <input value={paramA} onChange={onParamAChanged} data-testid={"param-a-input"} />
      </label>
      <br />
      <label>
        Param B:
        <input value={paramB} onChange={onParamBChanged} data-testid={"param-b-input"} />
      </label>
      <br />
      <button type={"button"} onClick={onCalculate}>calculate!</button>
      <br />
      <label htmlFor={"result"}>
        Result:
      </label>
      <input id={"result"} disabled value={result} />
    </div>
  )
}

App.propTypes = {
  calculate: PropTypes.func
}


export default App