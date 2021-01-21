import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('Renders without crashing', () => {
  render(<App />)
})

it('Renders the correct text', () => {
  render(<App />)
  expect(screen.getByText(/Hello World/)).toBeInTheDocument()
})
