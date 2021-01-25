import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('Renders without crashing', () => {
  render(<App />)
  expect(screen.getByText(/Hello/)).toBeInTheDocument()
})

it('Renders the correct text', () => {
  render(<App />)
  expect(screen.getByText(/Hello World/)).toBeInTheDocument()
})

it('Renders the correct text when passed as props', () => {
  // implement this, sucka
  // maybe we should have an example above where we pass the props? render(<App name= />) somewhere

  // render(<App name={"sucka!"} />)
  // expect(screen.getByText(/Hello sucka!/)).toBeInTheDocument()
})