import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {login} from './App';

/**
 * Dette testsettet er ment å vise hvordan man kan bekrefte at gitte funksjoner har blitt kalt som resultat av
 * brukerinteraksjoner.
 *
 * Vi har en applikasjon, med en login-side.
 * Vi skal kunne kunne skrive inn brukernavn og passord, og sjekke at login-funksjonen vår faktisk blir kalt.
 *
 * For å sjekke dette, kan vi benytte oss av mock funksjoner i Jest-APIet.
 * https://jestjs.io/docs/en/mock-functions
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave_xx_function
 */

describe('Test of .toHaveBeenCalled()', () => {

  /**
   * Vi mocker et funksjonskall med jest.fn()
   */
  const loginFunc = jest.fn((username, password) => login(username, password))

  /**
   * Vi sender inn vårt mockete funksjonskall til appen som props.
   */
  beforeAll(() => {
    render(<App login={loginFunc} />)
  })

  /**
   * En test for å bekrefte at login-funksjonen blir kalt når login-knappen blir trykket på.
   * En feil i applikasjonen gjør at den _mockete_ funksjonen vår aldri blir kalt.
   */
  it('login-function has been called', () => {
    userEvent.type(screen.queryByTestId('username-input'), 'bruker01')
    userEvent.click(screen.getByRole('button'))
    expect(loginFunc).toHaveBeenCalled()
  })

  /**
   * Det finnes logikk i login-funksjonen vår, som gjør at funksjonen returnerer true eller false basert på om det er
   * gyldige brukernavn og passord (i dette tilfellet, bare at brukernavn og passord ikke er tomme).
   * Skriv en test som sjekker at login-funksjonen returnerer riktig med riktige parametere.
   */
  it('login-function returns the correct values', () => {

  })

  /**
   * For at applikasjonen vår skal fungere, trenger vi å gjøre et redirect-kall ved en vellykket innlogging.
   * Vi ønsker å verifisere at kallet som skal redirecte oss faktisk blir kalt riktig, i henhold til login-funksjonen.
   * Her må appen utvides med en ny funksjon som redirecter (trenger ikke faktisk gjøre en redirect, men det skal finnes
   * en funksjon som blir kalt som følge av login-funksjonen)
   * Skriv en test som verifiserer oppførselen, og utvid appen med en ny redirect-funksjon.
   */
  describe('redirect-function is called appropriately', () => {
    // Merk at vi kan ha nøstede describe-setninger, for å gruppere test-caser som henger sammen.
    it('redirect-function is not on unsuccessful login', () => {

    })
    it('redirect-function is called on successful login', () => {

    })
  })
})
