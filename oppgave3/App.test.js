import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

it('Lists the users Anders and Gøran', async () => {
  render(<App />)

  expect(await screen.findByText(/Gøran/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders/)).toBeInTheDocument()
})
