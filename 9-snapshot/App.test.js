import { render } from "@testing-library/react"
import React from "react"
import App from "./App"

/**
 * Dette testsettet er ment å demonstrere hvordan man kan forenkle testingen ved å benytte snapshots.
 *
 * Vi har en enkel applikasjon, som viser noe tekst.
 *
 * For å verifisere at denne vises riktig hver gang, kan vi ta et snapshot av hvordan applikasjonen ser ut,
 * og så benytte dette snapshottet ved å sammenligne det med returnverdien (HTML-koden) som komponentet vårt returnerer.
 * Man kan lagre disse snapshottene til filer, som kan versjonskontrolleres, eller man kan bruke såkalte inline-snapshots,
 * så de står som JSX i selve testkoden.
 * Har valgt å stort sett benytte inline-snapshots her, så det er litt lettere å se hva som foregår.
 *
 * Merk at kjøring av noen av disse testene faktisk vil endre testkoden, ved å legge til dette snapshottet.
 *
 * https://jestjs.io/docs/en/snapshot-testing
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 9-snapshot
 */

/**
 * Først en test som viser hvordan snapshots ser ut som JSX i testkode. (Det er parameteret til toMatchInlineSnapshot())
 */
it("Rendered app should match stored snapshot", () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      Snapshot test
      <span>
        hei hei hei
      </span>
    </div>
  `)
})

/**
 * Et eksempel på hvordan man kan generere inline snapshot, til bruk seinere.
 * Ta først å kommenter inn expect(container.firstChild).toMatchInlineSnapshot()-linjen, kjør testen, og se hvordan koden endrer seg.
 */
it("Example on how to generate an inline snapshot", () => {
  const { container } = render(
    <App message={"we're going to generate a new inline snapshot"} />
  )

  // kommenter inn linjen under, og se hvordan testen endrer seg etter en kjøring
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      Snapshot test
      <span>
        we're going to generate a new inline snapshot
      </span>
    </div>
  `)
})

/**
 * Denne testen feiler, fordi det lagrede snapshottet ikke er oppdatert i henhold til koden.
 * Oppdater snapshottet i henhold til koden.
 */
it("Snapshot should be kept up to date", () => {
  const { container } = render(<App message={"the updated snapshot"} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      Snapshot test
      <span>
        the updated snapshot
      </span>
    </div>
  `)
})

/**
 * Vi kan også bruke snapshots til å sjekke at objekter er like.
 * Dette fungerer mer eller mindre på samme måte som for komponenter over.
 */
it("Snapshots can also be used to match object properties", () => {
  const user = {
    createdAt: new Date(328492800000),
    id: 8,
    name: "Steven Gerrard",
  }

  expect(user).toMatchInlineSnapshot(`
    Object {
      "createdAt": 1980-05-30T00:00:00.000Z,
      "id": 8,
      "name": "Steven Gerrard",
    }
  `)
})

/**
 * For enkelte felter er det ikke nødvendigvis så viktig at verdien er helt den samme, men heller at den er av riktig type.
 * Når man bruker property matchere, kan man angi at det er typen, og ikke verdien som er viktig, og at denne blir riktig.
 * https://jestjs.io/docs/en/snapshot-testing#property-matchers
 */
it("Object has the correct types", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "Roberto Firmino",
  }

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number)
  })
})

/**
 * Man kan også lagre snapshottene til separate filer, som kan være nyttig for å forenkle test-koden.
 * Skriv en test som sjekker applikasjonen vår opp mot en lagret snapshot-fil.
 * Denne må også genereres for at det skal være mulig å kjøre testen.
 * https://jestjs.io/docs/en/snapshot-testing
 */
it("Rendered app should match snaphot stored in file", () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchSnapshot()
})

/**
 * Skriv en lignende test som over, men med egendefinerte verdier inn som props til applikasjonen.
 */
it("Rendered app with custom props should match snapshot stored in file", () => {
  const { container } = render(<App message={"snapshot stored in file"} />)
  expect(container.firstChild).toMatchSnapshot()
})
