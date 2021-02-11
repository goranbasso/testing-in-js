import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
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
const redirectFunc = jest.fn(() => redirectFunction())

/**
 * En test for å bekrefte at login-funksjonen blir kalt når login-knappen blir trykket på.
 * Vi sender inn en mocket funksjon, som gir oss muligheten til å sjekke om den har blitt kalt.
 *
 * En feil i applikasjonen gjør at login-funksjonen vi sender inn aldri blir kalt.
 */
it('login function has been called', () => {
  // Vi sender inn vårt mockete funksjonskall til appen som en prop.
  render(<App login={loginFunc} />)

  userEvent.type(screen.queryByTestId('username-input'), 'bruker01')
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveBeenCalled()
})

/**
 * Det finnes logikk i login-funksjonen vår, som gjør at funksjonen returnerer true eller false basert på om det er
 * gyldige brukernavn og passord (i dette tilfellet, bare at brukernavn og passord ikke er tomme).
 * Skriv en test som sjekker at login-funksjonen returnerer riktig med riktige parametere.
 */
it('login function returns the correct values', () => {
  render(<App login={loginFunc} />)
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveReturnedWith(false)

  userEvent.type(screen.queryByTestId('username-input'), 'gorbas')
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveReturnedWith(false)

  userEvent.type(screen.queryByTestId('username-input'), '')
  userEvent.type(screen.queryByTestId('password-input'), 'hunter13')
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveReturnedWith(false)

  userEvent.type(screen.queryByTestId('username-input'), 'gorbas')
  userEvent.type(screen.queryByTestId('password-input'), 'hunter13')
  userEvent.click(screen.getByRole('button'))
  expect(loginFunc).toHaveReturnedWith(true)
})

/**
 * For at applikasjonen vår skal fungere, trenger vi å gjøre et redirect-kall ved en vellykket innlogging.
 * Vi ønsker å verifisere at kallet som skal redirecte oss faktisk blir kalt riktig, som følge av resultatet til login-kallet.
 * Her må appen utvides med en ny funksjon som redirecter (trenger ikke faktisk gjøre en redirect, men det skal finnes
 * en funksjon som blir kalt som følge av login-funksjonen).
 * Skriv en test som verifiserer oppførselen, og utvid appen med en ny redirect-funksjon.
 */
describe('redirect function is called appropriately', () => {
  it('redirect-function is not called on unsuccessful login', () => {
    render(<App login={loginFunc} redirect={redirectFunc} />)
    userEvent.click(screen.getByRole('button'))
    expect(redirectFunc).not.toHaveBeenCalled()
  })
  it('redirect-function is called on successful login', () => {
    render(<App login={loginFunc} redirect={redirectFunc} />)
    userEvent.type(screen.queryByTestId('username-input'), 'gorbas')
    userEvent.type(screen.queryByTestId('password-input'), 'hunter13')
    userEvent.click(screen.getByRole('button'))
    expect(redirectFunc).toHaveBeenCalled()
  })
})
