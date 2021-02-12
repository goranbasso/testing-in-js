import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import App from './App'
import { correctLoginFunction } from './login'

/**
 * Dette testsettet er ment å vise hvordan man kan bekrefte at gitte funksjoner har blitt kalt som resultat av
 * brukerinteraksjoner.
 *
 * Vi har en applikasjon, med en login-side.
 * Vi vil teste at vi kan skrive inn brukernavn og passord, og vite at login-funksjonen vi sender inn som en prop blir kalt.
 *
 * For å sjekke dette, kan vi benytte oss av mock funksjoner i Jest-APIet.
 * https://jestjs.io/docs/en/mock-functions
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 5-function
 */


/**
 * Vi mocker et funksjonskall med jest.fn().
 */

const loginFunc = jest.fn((username, password) => correctLoginFunction(username, password))

/**
 * En test for å bekrefte at login-funksjonen blir kalt når login-knappen blir trykket på.
 * Vi sender inn en mocket funksjon, som gir oss muligheten til å sjekke om den har blitt kalt.
 * 
 * En feil i applikasjonen gjør at login-funksjonen vi sender inn aldri blir kalt.
 */
it('login function has been called', () => {
  // Vi sender inn vårt mockete funksjonskall til appen som en prop.
  render(<App login={loginFunc} />)

  userEvent.type(screen.getByLabelText(/Brukernavn/), 'bruker01')
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveBeenCalled()
})

/**
 * For at applikasjonen vår skal fungere, trenger vi å gjøre et redirect-kall ved en vellykket innlogging.
 * Vi ønsker å verifisere at kallet som skal redirecte oss faktisk blir kalt riktig, som følge av resultatet til login-kallet.
 * Her må appen utvides med en ny funksjon som redirecter (trenger ikke faktisk gjøre en redirect, men det skal finnes
 * en funksjon som blir kalt som følge av login-funksjonen).
 * Skriv en test som verifiserer oppførselen, og utvid appen med en ny redirect-funksjon.
 */
describe('redirect function is called appropriately', () => {
  // Merk at vi kan ha nøstede describe-setninger, for å gruppere test-caser som henger sammen.
  it('redirect function is not called on unsuccessful login', () => {
    throw new Error('Not implemented')
  })
  it('redirect function is called on successful login', () => {
    throw new Error('Not implemented')
  })
})
