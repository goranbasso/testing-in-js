import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

export const getNumbersFromZeroToN = (n) => {
  return Array.from(Array(n + 1).keys())
}

const App = (props) => {

  const [rows, setRows] = useState([])

  useEffect(() => {
    const createRows = () => {
      setRows(getNumbersFromZeroToN(props.rowCount))
    }
    createRows()
  }, [])

  const product = (a, b) => a + b

  const renderRows = () => {
    const rowElements = []
    rows.forEach((row, index) => {
      rowElements.push(
        <tr key={`row_${index}`}
          data-testid={`row_${index}`}>
          <td data-testid={`col_first_${index}`}>
            {row}
          </td>
          <td data-testid={`col_second_${index}`}>
            { product(index, props.number) }
          </td>
        </tr>
      )
    })
    return rowElements
  }

  return (
    <div>
      Products of {props.number} (from 0 to {props.rowCount}):
      <table border={1} bordercolor={'black'}>
        <thead>
          <tr>
            <th>Multiplier</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

App.propTypes = {
  number: PropTypes.number,
  rowCount: PropTypes.number
}

App.defaultProps = {
  number: 5,
  rowCount: 5
}

export default App