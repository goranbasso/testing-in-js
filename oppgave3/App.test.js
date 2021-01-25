import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

it('Lists the users Anders and Gøran', async () => {
  render(<App />)
  await waitFor(() => {
    expect(screen.queryByText(/Gøran/)).toBeInTheDocument()
    expect(screen.queryByText(/Anders/)).toBeInTheDocument()
  })
})
