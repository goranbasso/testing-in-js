import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const sum = (a, b) => {
  return a + b
}

export const calc = (fn, a, b) => {
  return fn(a, b)
}

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
    const calculated = props.calc(paramA, paramB)
    // const calculated = props.calc(parseInt(paramA), parseInt(paramB))
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
  calc: PropTypes.func
}

App.defaultProps = {
  calc: sum
}

export default App