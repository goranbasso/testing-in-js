import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('table testing with custom matchers let\'s go!', () => {

  // our custom matcher
  expect.extend({
    secondColumnIsFirstTwice(container, first, second) {
      const pass = first + first === second
      if (pass) {
        return {
          message: () =>
            `expected second argument ('${second}') to be the first argument ('${first}') twice: ${first + first}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected second argument ('${second}') to be the first argument ('${first}') twice: ${first + first}`,
          pass: false,
        };
      }
    }
  })

  const getValueFromRow = (position, index) => {
    return screen.getByTestId(`row_${position}_${index}`).innerHTML
  }

  // stupid example maybe, should use numbers instead? maybe parts of the multiplication table? 1 to 5?
  // the point here is to implement a custom matcher, note the use of it.each() as well
  it.each([0, 1, 2])('second column is value of first column twice', (index) => {
    const {container} = render(<App/>);
    const firstValue = getValueFromRow('first', index)
    const secondValue = getValueFromRow('second', index)
    expect(container).secondColumnIsFirstTwice(firstValue, secondValue)
  })
})

