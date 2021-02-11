import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const sum = (a, b) => {
  return a + b
}

export const difference = (a, b) => {
  return a - b
}

export const product = (a, b) => {
  return a * b
}

export const division = (a, b) => {
  return b === 0 ? '' : a / b
}

export const exponentiation = (a, b) => {
  return Math.pow(a, b)
}

export const getDate = () => new Date()

export const calc = (fn, a, b) => {
  return fn(a, b)
}

const App = (props) => {

  const [paramA, setParamA] = useState([])
  const [paramB, setParamB] = useState([])
  const [result, setResult] = useState({
    sum: '',
    difference: '',
    product: '',
    division: '',
    exponentiation: ''
  })
  const [date, setDate] = useState([])

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
    const numberParamA = parseInt(paramA)
    const numberParamB = parseInt(paramB)
    const calculated = {
      sum: props.calcSum(numberParamA, numberParamB),
      difference: props.calcDifference(numberParamA, numberParamB),
      product: props.calcProduct(numberParamA, numberParamB),
      division: props.calcDivision(numberParamA, numberParamB),
      exponentiation: props.calcExponentiation(numberParamA, numberParamB)
    }
    setResult(calculated)
  }

  const onGetDate = () => {
    setDate(props.getDate().toString())
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

      <label htmlFor={"sum-result"}>
        Sum result:
      </label>
      <input id={"sum-result"} disabled value={result.sum} />
      <br />
      <label htmlFor={"diff-result"}>
        Difference result:
      </label>
      <input id={"diff-result"} disabled value={result.difference} />
      <br />
      <label htmlFor={"product-result"}>
        Product result:
      </label>
      <input id={"product-result"} disabled value={result.product} />
      <br />
      <label htmlFor={"divison-result"}>
        Division result:
      </label>
      <input id={"division-result"} disabled value={result.division} />
      <br />
      <label htmlFor={"power-result"}>
        Exponentiation result:
      </label>
      <input id={"power-result"} disabled value={result.exponentiation} />
      <br />

      <button type={"button"} onClick={onGetDate}>Get the date</button>
      <div>{date}</div>
    </div>
  )
}

App.propTypes = {
  calcSum: PropTypes.func,
  calcDifference: PropTypes.func,
  calcProduct: PropTypes.func,
  calcDivision: PropTypes.func,
  calcExponentiation: PropTypes.func,
  getDate: PropTypes.func
}

App.defaultProps = {
  calcSum: sum,
  calcDifference: difference,
  calcProduct: product,
  calcDivision: division,
  calcExponentiation: exponentiation,
  getDate: getDate
}

export default App