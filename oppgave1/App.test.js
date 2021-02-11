import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Dette testsettet er ment å vise hvordan man programmatisk kan sjekke innhold i siden.
 *
 * Vi har en applikasjon, som viser noe tekst.
 * Vi skal kunne sende inn tekst som props til komponentet, og det skal da vises på siden.
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
  render(<App name={'all you beautiful people!'}/>)
  expect(screen.getByText(/Hello all you beautiful people!/)).toBeInTheDocument()
})

/**
 * Utvid App.jsx slik at den aksepterer og viser flere forskjellige tekst-props, og skriv en test som bekrefter at
 * all teksten kommer med.
 */
it('Renders multiple different text-contents when passed as props', () => {
  // Her må nok return-uttrykket i App-funksjonen, og props utvides
  render(<App name={'guys!'} place={'Bergen!'}/>)
  expect(screen.getByText(/Hello guys!/)).toBeInTheDocument()
  expect(screen.getByText(/Welcome to Bergen!/)).toBeInTheDocument()
})