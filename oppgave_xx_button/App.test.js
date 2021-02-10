import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {ghost, cat} from './App';

/**
 * Dette testsettet er ment å vise hvordan man kan programmatisk trykke på elementer i siden,
 * via Jest-APIet.
 *
 * Vi har en appliksjon, med en knapp som skal endres basert på staten til appen.
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

  /**
   * screen.getByRole() lar oss hente et element fra siden, som har rollen vi sender inn
   */
  const assertButtonText = (text) => {
    expect(screen.getByRole('button').innerHTML).toMatch(text)
  }

  /**
   * userEvent er et bibliotek som lar oss simulere forskjellige handlinger fra brukere,
   * som klikking med musen og tastetrykk.
   */
  let buttonToggle = false;
  const clickButton = () => {
    userEvent.click(screen.getByRole('button'))
    buttonToggle = !buttonToggle
  }

  /**
   * En versting blant tester som man gjerne kan treffe på, er tester som er flaky.
   * Noen ganger blir testene grønn, andre ganger feiler de.
   * Disse kan være veldig vanskelige å debugge, og det er viktig at tester er deterministiske.
   * Man skal alltid få det samme resultatet, gitt de samme parameterene.
   */
  it('button has the expected text when clicked', () => {
    assertButtonText(cat)
    for (let i = 0; i < 10; i++) {
      clickButton()
      assertButtonText(buttonToggle ? ghost : cat)
    }
  })
})
