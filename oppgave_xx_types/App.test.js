import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {sum} from './App';

/**
 * Dette testsetter ment å vise hvordan man kan forsikre typesikkerhet gjennom testing i JavaScript.
 *
 * Vi har en applikasjon, hvor vi kan utregne summen av tall som vi får inn via input-felter på siden vår.
 * For at dette skal fungere, må vi være sikre på at de verdiene vi opererer med, er faktiske Number-typer.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch typesafety
 */

/**
 * describe() lar oss definere et sett av tester, som kjører sammen.
 */
describe('Test of .any() (type-safety)', () => {

  /**
   * For å kunne teste funksjonen vår, er vi nødt til å wrappe den i et jest.fn()-kall, slik vi ser under.
   */
  const calcCall = jest.fn((a, b) => sum(a, b))

  /**
   * Før hver test, kjører vi ett render()-kall med applikasjonen vår, hvor vi sender inn jest.fn()-funksjonen over.
   */
  beforeEach(() => {
    render(<App calc={calcCall} />)
  })

  /**
   * Her sjekker vi at funksjonen har blitt kalt i det hele tatt.
   */
  it('calc-function has been called', () => {
    userEvent.click(screen.getByRole('button'))
    expect(calcCall).toHaveBeenCalled()
  })

  /**
   * Her sjekker vi at parameterene vi sender inn til testen er rett.
   */
  it('calc-function has been called with number-parameters', () => {
    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByRole('button')

    userEvent.type(paramAInput, '4')
    userEvent.type(paramBInput, '5')
    userEvent.click(calcButton);
    expect(calcCall).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
  })

  /**
   * Skriv en test som viser at funksjonen returnerer forventet verdi.
   */
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
