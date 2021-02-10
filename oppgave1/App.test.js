import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Dette testsettet men å vise hvordan man kan programmatisk sjekke elementer i siden,
 * både om de eksisterer, og hvilket innhold de har.
 *
 * Vi har en nettside, som viser noe tekst.
 * Vi kan sende inn tekst som props til komponentet, og det vil da vises på siden.
 * For å kunne teste at de riktige verdiene kommer, må vi kunne velge elementer, og sjekke innholdet av de.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave1
 */

/**
 * Først en test for å sjekke at applikasjonen vår faktisk kjører.
 */
it('Renders without crashing', () => {
  render(<App />)
  expect(screen.getByText(/Hello/)).toBeInTheDocument()
})

/**
 * En test for å sjekke at komponentet aksepterer props-verdier.
 */
it('Accepts props without crashing', () => {
  render(<App name={'test'}/>)
  expect(screen.getByText(/Hello/)).toBeInTheDocument()
})

/**
 * En test for å sjekke at en gitt tekst finnes på siden. Her er det en feil i applikasjonen som må rettes.
 */
it('Renders the correct text', () => {
  render(<App />)
  expect(screen.getByText(/Hello World/)).toBeInTheDocument()
})

/**
 * Implementer en test som viser at tekst som sendes inn som props blir innhold i siden.
 */
it('Renders the correct text when passed as props', () => {
  // Skriv en test
})

/**
 * Utvid App.jsx slik at den aksepterer og viser flere forskjellige tekst-props, og skriv en test som bekrefeter at
 * all teksten kommer med.
 */
it('Renders multiple different text-contents when passed as props', () => {
  // Her må nok return-uttrykket i App-funksjonen, og props utvides
})