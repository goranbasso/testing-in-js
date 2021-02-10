import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Dette testsettet er ment å vise hvordan man programmatisk kan velge elementer på siden, og sjekke innholdet.
 *
 * Vi har en applikasjon, som trenger noen elementer.
 * Vi må definere elementene i applikasjonen, og de må vises riktig.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave2
 */

/**
 * Først en test for å sjekke at applikasjonen vår faktisk kjører.
 */
it('Renders without crashing', () => {
  render(<App />)
})

/**
 * En test for å sjekke at et element av spesifikk type finnes i dokumentet.
 */
it('Has a button', () => {
  render(<App />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

/**
 * En test for å sjekke at at et element av en spesifikk type har et spesifikt innhold.
 * Her er det en feil i applikasjonen som må rettes.
 */
it('Has a button with the text Press Me', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: 'Press Me'})).toBeInTheDocument()
})

/**
 * Utvid applikasjonen, slik at det finnes et nytt element, av ulik type enn button, som tar innholdet sitt fra props.
 */
it('Has a non-button element with custom text when passed as props', () => {
  // Skriv en test, bruk en annen rolle enn button
})

/**
 * Utvid applikasjonen, slik at det finnes flere knapper som tar innholdet sitt fra props.
 * Merk at getByRole() vil feile dersom den oppdager flere elementer som tilfredstiller kravet, her må nok en annen
 * spørring benyttes: https://testing-library.com/docs/queries/about/
 */
it('Has multiple buttons with custom text passed in as props', () => {
  // Utvid applikasjonen med flere knapper
  // Skriv en test som kan sjekke innholdet av flere knapper
})
