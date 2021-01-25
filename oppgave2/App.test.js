import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('Renders without crashing', () => {
  render(<App />)
})

it('Has a button', () => {
  render(<App />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

it('Has a button with the text Press Me', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: 'Press Me'})).toBeInTheDocument()
})

it('Has a button with custom text when passed as props', () => {
  // render(<App name={'YO'} />)
  // expect(screen.getByRole('button', { name: 'YO' })).toBeInTheDocument()
})
