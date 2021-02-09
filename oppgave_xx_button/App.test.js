import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App, {ghost, cat} from './App';


describe('button event testing or something, i dunno', () => {
  beforeAll(() => {
    render(<App />)
  })

  let buttonToggle = false;
  const assertButtonText = (text) => {
    expect(screen.getByRole('button').innerHTML).toMatch(text)
  }
  const clickButton = () => {
    userEvent.click(screen.getByRole('button'))
    buttonToggle = !buttonToggle
  }

  // everybody loves flaky tests
  it('button is spooky in a consistent manner', () => {
    assertButtonText(cat)
    for (let i = 0; i < 10; i++) {
      clickButton()
      assertButtonText(buttonToggle ? ghost : cat)
    }
  })
})
