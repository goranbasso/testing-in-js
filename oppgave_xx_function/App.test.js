import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('Test of .toHaveBeenCalled()', () => {

  const loginFunc = jest.fn()

  beforeAll(() => {
    render(<App login={loginFunc} />)
  })
  
  it('login-function has been called', () => {
    // fireEvent(screen.queryByTestId('username-input'), new KeyboardEvent())
    fireEvent(screen.getByRole('button'), new MouseEvent('click', { bubbles: true, cancelable: true }))
    expect(loginFunc).toHaveBeenCalled()
  })
})
