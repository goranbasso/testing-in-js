import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Dette testsettet er ment å demonstrere hvordan man kan bruke mocking for å teste komponenter, uten å måtte
 * gjøre faktiske nettverkskall for å få tak i denne dataen.
 * Å benytte mocket data er veldig nyttig når man tester komponenter og applikasjoner som gjør nettverkskall,
 * da man alltid kan få det samme kallet, og ikke trenger å kjøre testene sine mot tjenester som potensielt kan være ustabile.
 * Enhetstester (og komponenttester) burde være deterministiske, og alltid ha det samme utfallet.
 *
 * Merk at det også finnes tester som gjør faktiske nettverkskall, og sjekker at responsen fra de er riktig,
 * og blir behandlet riktig av en applikasjon.
 * Dette er gjerne del av integrajsonstester, eller ende-til-ende-tester, men det er utenfor scopen til denne workshoppen.
 *
 * Ta en titt i /mocks/-mappen, der ligger det en fil som heter handlers.js, hvor vi definerer hvilken respons
 * forskjellige endepunkter skal returnere.
 * Gjør vi et kall mot /users, gjennom fetch-APIet (getAllUsers()-funksjonen i App.jsx, vil vi få en respons
 * med HTTP-statuskode 200 OK, og en body som består av en liste av bruker-objekter.
 *
 * Applikasjonen vår gjør dette kallet, og bruker innholdet av responsen.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave3
 */

/**
 * Først en test for å sjekke at applikasjonen vår faktisk kjører.
 */
it('Renders without crashing', () => {
  render(<App />)
  expect(screen.getByText(/Our fantastic users:/)).toBeInTheDocument();
})

/**
 * En test for å sjekke at vi lister ut mockete brukere riktig.
 */
it('Lists the users Anders and Gøran', async () => {
  render(<App />)

  expect(await screen.findByText(/Gøran/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders/)).toBeInTheDocument()
})

/**
 * En test som sjekker at det finnes ytterligere brukere i mocked data. Endre mocket data fra handlers.js.
 */
it('Lists the users Sigve and Frode', async () => {
  render(<App />)

  expect(await screen.findByText(/Sigve/)).toBeInTheDocument()
  expect(await screen.findByText(/Frode/)).toBeInTheDocument()
})

/**
 * Det er behov for å utvide bruker-APIet, slik at brukere også har et brukernavn.
 * Skriv en test som bekrefter at vi viser navn og brukernavn for hver bruker, og utvidt applikasjonen slik at testen
 * blir grønn. Her må også den mockete dataen endres, for å gjenspeile utvidelsen av bruker-APIet.
 */
it('Lists the last and first names of the users', () => {
  // Skriv en test, og utvid applikasjonen slik at den viser brukernavn sammen med fornavn.
})

/**
 * Brukerne våre er utviklere, som har jobbet på en rekke applikasjoner sammen.
 * Uthenting av applikasjoner er et nytt endepunkt i den eksterne tjenesten, og responsen skal listes opp under brukerne.
 * Her må applikasjonen utvides til å gjøre et ekstra fetch-kall, mot et nytt endepunkt (/apps), og det må listes opp på siden.
 * Mocket data må også utvides til å gi en respons til kallet mot det nye endepunktet.
 */
it('Lists the applications developed by the users', () => {
  // Skriv en test, og utvid applikasjonen og mocket data slik at den lister opp applikasjoner i tillegg
})