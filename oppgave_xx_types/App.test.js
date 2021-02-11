import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {sum} from './App';

/**
 * Dette testsettet er ment å vise hvordan man kan forsikre typesikkerhet gjennom testing i JavaScript.
 *
 * Vi har en applikasjon, hvor vi kan utregne summen av tall som vi får inn via input-felter på siden vår.
 * For at dette skal fungere, må vi være sikre på at de verdiene vi opererer med, er faktiske Number-typer.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave_xx_types
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
   * Her sjekker vi at funksjonen har blitt kalt i det hele tatt.
   */
  it('calc-function has been called', () => {
    // Vi sender inn det mockete funksjonskallet
    render(<App calc={calcCall} />)
    userEvent.click(screen.getByRole('button'))
    expect(calcCall).toHaveBeenCalled()
  })

  /**
   * Her sjekker vi at parameterene vi sender inn til testen er rett.
   */
  it('calc-function has been called with number-parameters', () => {
    render(<App calc={calcCall} />)

    const paramAInput = screen.getByTestId('param-a-input')
    const paramBInput = screen.getByTestId('param-b-input')
    const calcButton = screen.getByRole('button')

    userEvent.type(paramAInput, '4')
    userEvent.type(paramBInput, '5')
    userEvent.click(calcButton);
    expect(calcCall).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
  })

  /**
   * Skriv en test som viser at funksjonen returnerer forventet verdi og type.
   */
  it('calc-function returns the expected value', () => {
    // Skriv en test
    fail('Not implemented')
  })

  /**
   * Utvid applikasjonen, slik at calculate utregner flere verdier enn bare en sum.
   * Vi ønsker flere resultater, for subtrahering, multiplisering, deling, og eksponensiering.
   * Eventuelt flere om du ønsker.
   * Disse resultatene skal vises på siden, og skal ha riktige typer og verdier.
   * Skriv en test for dette, og utvid applikasjonen.
   */
  it('calc-function returns multiple expected values', () => {
    // Utvid applikasjonen med flere resultater fra calculate, og skriv en test for dette
    // Her må nok applikasjonen endres, og noen av de andre testene, slik at man kan spørre etter spesifikke resultater
    fail('Not implemented')
  })

  /**
   * Utvid applikasjonen, slik at vi har en knapp som uthenter nåværende dato og tidpsunkt, og viser denne på siden.
   * Her må vi sjekke at det faktisk er et dato-objekt som blir sendt videre fra funksjonen som henter datoen.
   */
  it('date test', () => {
    // Skriv en test for dato-objekter, og utvid applikasjonen til å ha en knapp som uthenter og viser nåværende dato-tidspunkt
    fail('Not implemented')
  })
})
