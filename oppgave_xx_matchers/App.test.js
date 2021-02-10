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
 * npm run test:watch opgave_xx_matchers
 */

describe('Multiplication-table works as expected', () => {

  /**
   * Her definerer vi vår egen matcher, .secondColumnIsProductOfFirstAndNumber(), som sjekker at
   * verdiene i kolonenne er riktig, basert på inn-parametere
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

  const getValueFromRow = (position, index) => {
    return parseInt(screen.getByTestId(`col_${position}_${index}`).innerHTML)
  }

  /**
   * Vi kan nøste describe-setnigner for å gruppere test-caser
   */
  describe('Multiplication-table displays the correct default values', () => {
    const number = 5
    const numbers = getNumbersFromZeroToN(number)

    /**
     * Denne testen skal sjekke at gangetabellen vår fungerer som forventet. En feil i koden gjør at denne feiler.
     * Merk at vi kan bruke it.each() for å kalle samme it-setning med flere parametere
     */
    it.each(numbers)('The second column is the product of first column and the given number', (index) => {
      const {container} = render(<App/>);
      const firstValue = getValueFromRow('first', index)
      const secondValue = getValueFromRow('second', index)
      expect(container).secondColumnIsProductOfFirstAndNumber(firstValue, secondValue, number)
    })

    /**
     * Vi ønsker å utvide tabellen vår, slik at den har en ny kolonne som viser tallet potensen av tallet,
     * der første kolonne er eksponenten, og tredje kolonne er potensen.
     * For eksempel vil 5^2 ha verdien 2 i første kolonne, og 25 i tredje.
     *
     * Her må applikasjonen utvides for å vise denne ekstra kolonnen, og det må skrives en test og en ny egendefinert
     * matcher som sjekker at den tredje kolonnen har den riktige verdien
     */
    it.each(numbers)('The third column is the nth power of number, where n is the first column', () => {
      // Skriv en test, som bruker en ny egendefinert matcher, og utvid applikasjonen
    })
  })

  /**
   * Skriv flere tester som sjekker at tabellen har de riktige verdiene, gitt at man sender inn props med nye verdier
   */
  describe('Multiplication-table displays the correct values for custom props', () => {
    // Skriv flere tester, som sjekker at vi kan sende inn egendefinerte props, og tabellen vil ha de riktige verdiene
    // Skriv gjerne custom matchere, og utvid appen dersom nødvendig
    // Sjekk at det er riktig antall rader, og at verdiene i radene og kolonnene stemmer
  })
})

