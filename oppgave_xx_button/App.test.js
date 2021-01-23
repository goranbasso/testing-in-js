import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, {ghost, cat} from './App';


describe('button event testing or something, i dunno', () => {
  beforeAll(() => {
    render(<App />)
  })

  let buttonToggle = false;
  const assertButtonText = (text) => {
    expect(screen.queryByRole('button').innerHTML).toMatch(text)
  }
  const clickButton = () => {
    fireEvent(screen.queryByRole('button'), new MouseEvent('click', { bubbles: true, cancelable: true }))
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
