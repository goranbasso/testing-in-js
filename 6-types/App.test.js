import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {difference, division, exponentiation, getDate, product, sum} from './App';

/**
 * Dette testsettet er ment å vise hvordan man kan forsikre typesikkerhet gjennom testing i JavaScript.
 *
 * Vi har en applikasjon, hvor vi kan utregne summen av tall som vi får inn via input-felter på siden vår.
 * For at dette skal fungere, må vi være sikre på at de verdiene vi opererer med, er faktiske Number-typer.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 6-types
 */

/**
 * describe() lar oss definere et sett av tester, som kjører sammen.
 */
describe('Test of .any() (type-safety)', () => {

  /**
   * For å kunne teste funksjonen vår, er vi nødt til å wrappe den i et jest.fn()-kall, slik vi ser under.
   */
  const calcSumCall = jest.fn((a, b) => sum(a, b))
  const calcDifferenceCall = jest.fn((a, b) => difference(a, b))
  const calcProductCall = jest.fn((a, b) => product(a, b))
  const calcDivisionCall = jest.fn((a, b) => division(a, b))
  const calcExponentiationCall = jest.fn((a, b) => exponentiation(a, b))
  const getDateCall = jest.fn(() => getDate())

  /**
   * Her sjekker vi at funksjonen har blitt kalt i det hele tatt.
   */
  it('calc-function has been called', () => {
    // Vi sender inn det mockete funksjonskallet
    render(<App calcSum={calcSumCall} />)
    const calcButton = screen.getByText(/calculate!/)
    userEvent.click(calcButton)
    expect(calcSumCall).toHaveBeenCalled()
  })

  /**
   * Her sjekker vi at parameterene vi sender inn til testen er rett.
   */
  it('calc-function has been called with number-parameters', () => {
    render(<App calcSum={calcSumCall} />)

    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByText(/calculate!/)

    userEvent.type(paramAInput, '4')
    userEvent.type(paramBInput, '5')
    userEvent.click(calcButton);
    expect(calcSumCall).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
  })

  /**
   * Skriv en test som viser at funksjonen returnerer forventet verdi og type.
   */
  it('calc-function returns the expected value', () => {
    render(<App calcSum={calcSumCall} />)

    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByText(/calculate!/)

    userEvent.type(paramAInput, '4')
    userEvent.type(paramBInput, '5')
    userEvent.click(calcButton);
    expect(calcSumCall).toHaveReturnedWith(expect.any(Number))
    expect(calcSumCall).toHaveReturnedWith(9)
  })

  /**
   * Utvid applikasjonen, slik at calculate utregner flere verdier enn bare en sum.
   * Vi ønsker flere resultater, eksempelvis subtrahering, multiplisering, deling, og eksponensiering.
   * Eventuelt flere om du ønsker.
   * Disse resultatene skal vises på siden, og skal ha riktige typer og verdier.
   * Skriv en test for dette, og utvid applikasjonen.
   */
  it('calc-function calculates multiple expected values', () => {
    render(<App
      calcSum={calcSumCall}
      calcDifference={calcDifferenceCall}
      calcProduct={calcProductCall}
      calcDivision={calcDivisionCall}
      calcExponentiation={calcExponentiationCall}
    />)

    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByText(/calculate!/)

    userEvent.type(paramAInput, '4')
    userEvent.type(paramBInput, '5')
    userEvent.click(calcButton);

    expect(calcSumCall).toHaveReturnedWith(expect.any(Number))
    expect(calcSumCall).toHaveReturnedWith(9)

    expect(calcDifferenceCall).toHaveReturnedWith(expect.any(Number))
    expect(calcDifferenceCall).toHaveReturnedWith(-1)

    expect(calcProductCall).toHaveReturnedWith(expect.any(Number))
    expect(calcProductCall).toHaveReturnedWith(20)

    expect(calcDivisionCall).toHaveReturnedWith(expect.any(Number))
    expect(calcDivisionCall).toHaveReturnedWith(0.8)

    expect(calcExponentiationCall).toHaveReturnedWith(expect.any(Number))
    expect(calcExponentiationCall).toHaveReturnedWith(1024)
  })

  /**
   * Utvid applikasjonen, slik at vi har en knapp som uthenter nåværende dato og tidpsunkt, og viser denne på siden.
   * Her må vi sjekke at det faktisk er et dato-objekt som blir sendt videre fra funksjonen som henter datoen.
   */
  it('date-function returns a date object', () => {
    render(<App getDate={getDateCall} />)

    userEvent.click(screen.getByText(/Get the date/))

    expect(getDateCall).toHaveReturnedWith(expect.any(Date))
  })
})
