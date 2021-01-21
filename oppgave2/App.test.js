import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('Renders without crashing', () => {
  render(<App />)
})

it('Has a button with the text Press Me', () => {
  render(<App />)
  expect(screen.getByRole("button", { name: 'Press Me'})).toBeInTheDocument()
})
