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
 * npm run test:watch 2-queries-roles
 */

/**
 * Litt om roller for de interesserte:
 * Et element sin rolle kan være implisitt eller eksplisitt.
 * Roller brukes blant annet av skjermlesere, og indikerer funksjonaliteten til elementet.
 *
 * En <button /> har implisitt rolle "button", altså trenger vi ikke å definere denne rollen. Den er semantisk riktig.
 * Vi kan lage en <div> som har en onClick-metode, og dermed kan fungere som en knapp, og se ut som en knapp hvis vi styler den,
 * men en skjermleser vil ikke kunne vite at dette er en knapp, og brukeren vil da ikke kunne bruke denne funksjonaliteten.
 * Denne er ikke semantisk riktig, den har egenskaper som ikke er indikert av HTML-elementet som brukes.
 * Da er det mulig å sette rollen eksplisitt med <div tabindex="0" role="button" /> og da blir dette tolket som en "button" av en skjermleser.
 *
 * Vi bør så mye som mulig unngå å sette roller eksplisitt, bruk alltid semantisk riktige elementer der det er mulig.
 *
 * Les gjerne mer om roller her
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
 *
 * Semtantikk
 * https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html
 *
 * I Norge er det krav om universell utforming for nettløsninger.
 * Les mer her (ikke relevant for oppgaven):
 * https://www.uutilsynet.no/regelverk/gjeldende-regelverk-og-krav/746
 */

/**
 * En test for å sjekke at et element med en spesfikk rolle finnes i dokumentet.
 * 
 */
it('Has a button', () => {
  render(<App />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

/**
 * En test for å sjekke at at et element av en spesifikk type har et spesifikt innhold.
 *
 * Her er det en feil i applikasjonen som må rettes.
 */
it('Has a button with the text "Sign in"', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: 'Sign in'})).toBeInTheDocument()
})

/**
 * Applikasjonen inneholder et tekstfelt for inntasting av passord.
 * Vi har ingen test som sjekker om dette feltet er tilstede.
 * 
 * Finn den beste måten å sjekke dette på ved bruk av prioriteringslisten lenket nedenfor og skriv testen.
 * https://testing-library.com/docs/queries/about/#priority
 * 
 * Merk at passordfeltet ikke oppfyller krav til tilgjengelighet.
 * Her kan du gjerne forbedre koden. Det vil kunne påvirke hvordan du skriver testen.
 * Tips: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints
 */
it('Has a password field', () => {
  render(<App />)
  expect(screen.getByLabelText(/Password:/)).toBeInTheDocument()
})


/**
 * Vi ønsker å legge til en lenke til et nettsted,
 * slik at våre ansatte har noe å gjøre på mens de venter på at innloggingen skal bli ferdig.
 * Nettstedet denne lenken går til skal ikke være hardkodet i denne komponenten, og må sendes inn som en prop.
 * 
 * Lag en test som sjekker
 * - At lenken er tilgjengelig i HTML-dokumentet
 * - At URL-en som lenken peker til er som forventet
 * - At visningsteksten til lenken er som forventet
 * 
 * Tips: https://github.com/testing-library/jest-dom#table-of-contents
 * 
 * Bruk prioriteringslisten fra forrige oppgave og finn den beste måten å hente ut elementet på.
 * 
 * Tips: https://www.w3.org/TR/html-aria/#docconformance
 * 
 */
it('Contains a link to a fun website', () => {
  const mozillaLink = 'https://developer.mozilla.org'
  render(<App link={mozillaLink}/>)
  checkLink('Cool link', mozillaLink)
})

// egendefinert hjelpemetode, fordi testen over vil feile dersom man legger til flere lenker, og fortsatt bruker getByRole
const checkLink = (linkName, url) => {
  expect(screen.getByText(linkName)).toBeInTheDocument()
  expect(screen.getByText(linkName)).toHaveAttribute('href', url)
  expect(screen.getByText(linkName)).toHaveTextContent(linkName)
}

/**
 * Det var veldig gøy for våre ansatte med en lenke til et nettsted.
 * De etterspør nå flere lenker til flere nettsteder.
 * 
 * Lag en test som sjekker lenkene, og implementer endringen.
 * 
 * Merk at getBy*() vil feile dersom den oppdager flere elementer som tilfredstiller kravet.
 * https://testing-library.com/docs/queries/about/#types-of-queries
 */
it('Contains multiple links to fun websites', () => {
  render(<App />)
  checkLink('Cool link', 'https://www.google.com')
  checkLink('Other cool link', 'https://www.nrk.no')
  checkLink('Another cool link', 'https://developer.mozilla.org')
})