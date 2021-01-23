import React, {useEffect, useState} from 'react';

const App = () => {

  const [rows, setRows] = useState([])

  useEffect(() => {
    const createRows = () => {
      setRows(['hei', 'på', 'deg'])
    }
    createRows()
  }, [])

  const renderRows = () => {
    const rowElements = []
    rows.forEach((row, index) => {
      rowElements.push(
        <tr key={`row_${index}`}
          data-testid={`row_${index}`}>
          <td data-testid={`row_first_${index}`}>
            {row}
          </td>
          <td data-testid={`row_second_${index}`}>
            { row /* + row*/}
          </td>
        </tr>
      )
    })
    return rowElements
  }

  return (
    <div>
      Table tennis
      <table border={1} bordercolor={'black'}>
        <thead>
          <tr>
            <th>col1</th>
            <th>col2</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

export default App