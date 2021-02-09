import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


describe('Test of .toHaveBeenCalled()', () => {

  const loginFunc = jest.fn()

  beforeAll(() => {
    render(<App login={loginFunc} />)
  })
  
  it('login-function has been called', () => {
    userEvent.type(screen.queryByTestId('username-input'), 'bruker01')
    userEvent.click(screen.getByRole('button'))
    expect(loginFunc).toHaveBeenCalled()
  })
})
