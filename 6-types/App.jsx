import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {difference, division, exponentiation, getDate, sum} from './helpers'
import {product} from "../0-warmup/functions"

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
      sum: props.calculateSum(numberParamA, numberParamB),
      difference: props.calculateDifference(numberParamA, numberParamB),
      product: props.calculateProduct(numberParamA, numberParamB),
      division: props.calculateDivision(numberParamA, numberParamB),
      exponentiation: props.calculateExponentiation(numberParamA, numberParamB)
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
  calculateSum: PropTypes.func,
  calculateDifference: PropTypes.func,
  calculateProduct: PropTypes.func,
  calculateDivision: PropTypes.func,
  calculateExponentiation: PropTypes.func,
  getDate: PropTypes.func
}

App.defaultProps = {
  calculateSum: sum,
  calculateDifference: difference,
  calculateProduct: product,
  calculateDivision: division,
  calculateExponentiation: exponentiation,
  getDate: getDate
}

export default App