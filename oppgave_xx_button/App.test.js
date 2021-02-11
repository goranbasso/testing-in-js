import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {ghost, cat} from './App';

/**
 * Dette testsettet er ment å vise hvordan man kan programmatisk trykke på elementer i siden,
 * via Jest-APIet.
 *
 * Vi har en festlig Halloween-app, med en knapp som har innhold som skal endres basert på staten til appen.
 * Man endrer staten ved å trykke på knappen.
 * For å kunne teste dette, må vi kunne velge elementer på siden, og utføre handlinger på de.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave_xx_button
 */

/**
 * describe() lar oss definere et sett av tester, som kjører sammen
 */
describe('Test of button behaviour', () => {
  beforeAll(() => {
    render(<App />)
  })

  const assertButtonText = (text) => {
    expect(screen.getByRole('button')).toContainHTML(text)
  }

  /**
   * userEvent er et bibliotek som lar oss simulere forskjellige handlinger fra brukere,
   * som klikking med musen og tastetrykk.
   * 
   * https://github.com/testing-library/user-event
   */
  let buttonToggle = false;
  const clickButton = () => {
    userEvent.click(screen.getByRole('button'))
    buttonToggle = !buttonToggle
  }

  /**
   * En versting blant tester som man gjerne kan treffe på, er tester som er ustabile.
   * Noen ganger blir testene grønn, andre ganger feiler de.
   * Disse kan være veldig vanskelige å debugge, og det er viktig at tester er deterministiske.
   * Man skal alltid få det samme resultatet, gitt de samme parameterene.
   *
   * Her er det en dårlig implementasjon i applikasjonen som gjør at testen vil være ustabil.
   */
  it('Button has the expected text when clicked', () => {
    assertButtonText(cat)
    for (let i = 0; i < 3; i++) {
      clickButton()
      assertButtonText(buttonToggle ? ghost : cat)
    }
  })

  /**
   * Det er ønskelig at applikasjonen vår skal kunne sette staten direkte til en av de 2 alternativene.
   * Akspetansekriteriene har blitt utvidet, slik at det nå skal være 2 nye knapper, som setter flagget til henholdsvis
   * true eller false, og dette skal gjenspeiles i den orginale knappen.
   * Utvid applikasjonen med flere knapper som setter staten eksplisitt, og test at denne oppførselen holder.
   *
   * Merk at getByRole()-spørringen vil feile dersom den finner flere elementer som matcher kriteriet,
   * så her må spørringen tilpasses: https://testing-library.com/docs/queries/about/
   * De andre testene skal fortsatt være grønne.
   */
  it('Has two buttons that set the state explicitly', () => {
    // Skriv en test, og utvid applikasjonen
    fail('Not implemented')
  })
})
