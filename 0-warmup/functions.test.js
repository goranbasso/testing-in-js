import { sum, identity } from "./functions"
import {absolute, product} from "./functions";

/**
 * Dette testsettet bruker vi til å varme opp litt.
 * 
 * Vi har en fil, functions.js, som inneholder noen enkle funksjoner.
 * Denne filen inneholder tester til funksjonene i functions.js, men er ikke ferdig laget.
 * Les beskrivelsene som står i kommentarene før testene, og utfør oppgavene.
 * 
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 0-warmup
 */


/**
 * Her er et eksempel på en fungerende test.
 * Den skal vises med en grønn hake ved siden av testbeskrivelsen i terminalvinduet ditt.
 */
it('identity() returns the same value as the input', () => {
  expect(identity(1)).toEqual(1)
  expect(identity('abc')).toEqual('abc')
  expect(identity({ hello: 'world' })).toEqual({ hello: 'world' })
})

/**
 * Denne testen feiler. I følge beskrivelsen av testen skal funksjonen returnere summen av to tall.
 * Testen er satt opp riktig, så da må implementasjonen av funksjonen være feil.
 * 
 * Endre koden for funksjonen sum() i functions.js slik at testen blir godkjent.
 */
it('sum() returns the sum of the two input variables', () => {
  expect(sum(1, 1)).toEqual(2)
  expect(sum(-1, -2)).toEqual(-3)
})

/**
 * Funksjonen product() eksisterer i functions.js, men har ikke testdekning.
 * Implementer de tomme testene under, slik at de passer til testbeskrivelsen.
 */
describe('product()', () => {
  it('returns the product of the two input variables', () => {
    throw new Error('Not implemented')
  })
  
  it('returns NaN if any of the input variables are not numbers', () => {
    throw new Error('Not implemented')
  })
})

/**
 * Applikasjonen vi utvikler skal ha en funksjon som returnerer den absolutte verdien av et tall.
 * Lag en test for denne funksjonen, og implementer denne funksjonen i functions.js
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */

// Lag din test her