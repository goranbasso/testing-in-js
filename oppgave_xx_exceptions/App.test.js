import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, {sum} from './App';


describe('Test of .any() (type-safety)', () => {

  const calcCall = jest.fn((a, b) => sum(a, b))

  beforeEach(() => {
    render(<App calc={calcCall} />)
  })

  it('calc-function has been called', () => {
    fireEvent(screen.getByRole('button'), new MouseEvent('click', { bubbles: true, cancelable: true }))
    expect(calcCall).toHaveBeenCalled()
  })
  
  it('calc-function has been called with number-parameters', () => {
    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByRole('button')

    fireEvent.change(paramAInput, { target: { value: '4' }})
    fireEvent.change(paramBInput, { target: { value: '5' }})
    fireEvent(calcButton, new MouseEvent('click', { bubbles: true, cancelable: true }))
    expect(calcCall).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
  })

  it('calc-function returns the expected value', () => {
    // implement this!

    // const paramAInput = screen.getByTestId('param-a-input')
    // const paramBInput = screen.getByTestId('param-b-input')
    // const calcButton = screen.getByRole('button')
    // const resultInput = screen.getByLabelText(/Result:/)
    //
    // fireEvent.change(paramAInput, { target: { value: '4' }})
    // fireEvent.change(paramBInput, { target: { value: '5' }})
    // fireEvent(calcButton, new MouseEvent('click', { bubbles: true, cancelable: true }))
    // expect(resultInput.value).toEqual(expect.any(Number)) // hmm this does not quite work
    // expect(resultInput.value).toEqual("9")
  })
})
