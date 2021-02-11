import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {getNumbersFromZeroToN} from './App';

/**
 * Dette testsettet er ment å demonstrere hvordan man kan utvide Jest-APIet med egendefinerte matchers.
 *
 * Vi har en applikasjon som viser deler av gangetabellen, basert på props som er sendt inn.
 *
 * Egendefinerte matchere veldig nyttige når man har en del komplisert oppførsel i applikasjonen, og gjør at man kan skrive testkode
 * som er gjenbrukbar og lettleselig, men samtidig spesifikk til applikasjonen.
 *
 * Man bruker expect.extend()-funksjonen til å definere nye matchere.
 *
 * Dokumentasjon rundt custom matchere:
 * https://jestjs.io/docs/en/expect#expectextendmatchers
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 8-matchers
 */

/**
 * Her definerer vi vår egen matcher, .secondColumnIsProductOfFirstAndNumber(), som sjekker at
 * verdiene i kolonenne er riktig, basert på inn-parametere.
 */
expect.extend({
  secondColumnIsProductOfFirstAndNumber(container, first, second, number) {
    const pass = first * number === second
    if (pass) {
      return {
        message: () =>
          `expected second argument ('${second}') to be the product of the first argument ('${first}') and number: ${first * number}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected second argument ('${second}') to be the product of the first argument ('${first}') and number: ${first * number}`,
        pass: false,
      }
    }
  }
})

expect.extend({
  thirdColumnIsExponentialOfFirstAndNumber(container, first, third, number) {
    const pass = Math.pow(number, first) === third
    if (pass) {
      return {
        message: () =>
          `expected third argument ('${third}') to be the exponential of the first argument ('${first}') and number: ${Math.pow(number, first)}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `expected third argument ('${third}') to be the exponential of the first argument ('${first}') and number: ${Math.pow(number, first)}`,
        pass: false
      }
    }
  }
})

const getValueFromRow = (position, index) => {
  return parseInt(screen.getByTestId(`col_${position}_${index}`).innerHTML)
}

/**
 * Vi kan ha describe-setninger for å gruppere test-caser,
 * og definere variabler som vi kan gjenbruke i de indre it-setningene.
 */
describe('Multiplication-table displays the correct default values', () => {
  const number = 5
  const numbers = getNumbersFromZeroToN(number)

  /**
   * Denne testen skal sjekke at gangetabellen vår fungerer som forventet. En feil i koden gjør at denne feiler.
   * Merk at vi kan bruke it.each() for å kalle samme it-setning med flere parametere.
   */
  it.each(numbers)('The second column is the product of first column and the given number', (index) => {
    const {container} = render(<App/>);
    const firstValue = getValueFromRow('first', index)
    const secondValue = getValueFromRow('second', index)
    expect(container).secondColumnIsProductOfFirstAndNumber(firstValue, secondValue, number)
  })

  /**
   * Vi ønsker å utvide tabellen vår, slik at den har en ny kolonne som viser potensen av tallet,
   * der første kolonne er eksponenten, og tredje kolonne er potensen.
   * For eksempel vil 5^2 ha verdien 2 i første kolonne, og 25 i tredje.
   *
   * Her må applikasjonen utvides for å vise denne ekstra kolonnen, og det må skrives en test og en ny egendefinert
   * matcher som sjekker at den tredje kolonnen har den riktige verdien.
   */
  it.each(numbers)('The third column is the nth power of number, where n is the first column', (index) => {
    const {container} = render(<App />)
    const firstValue = getValueFromRow('first', index)
    const thirdValue = getValueFromRow('third', index)
    expect(container).thirdColumnIsExponentialOfFirstAndNumber(firstValue, thirdValue, number)
  })
})

/**
 * Skriv flere tester som sjekker at tabellen har de riktige verdiene, gitt at man sender inn props med nye verdier.
 * Sjekk at det er riktig antall rader, og at verdiene i radene og kolonnene stemmer.
 * Skriv gjerne custom matchere, og utvid appen dersom nødvendig.
 */
describe('Multiplication-table displays the correct values for custom props', () => {
  const number = 2
  const numbers = getNumbersFromZeroToN(10)

  it.each(numbers)('The multiplication-table can take custom props', (index) => {
    const {container} = render(<App number={number} rowCount={10} />)
    const firstValue = getValueFromRow('first', index)
    const secondValue = getValueFromRow('second', index)
    const thirdValue = getValueFromRow('third', index)
    expect(container).secondColumnIsProductOfFirstAndNumber(firstValue, secondValue, number)
    expect(container).thirdColumnIsExponentialOfFirstAndNumber(firstValue, thirdValue, number)
  })

  it('The multiplication-table has the correct number of rows', () => {
    render(<App number={number} rowCount={10} />)
    expect(screen.getAllByRole('row')).toHaveLength(12)
  })
})

