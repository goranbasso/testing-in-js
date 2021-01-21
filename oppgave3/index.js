import React from 'react'
import ReactDOM from 'react-dom'
import { worker } from '../mocks/browser'
import App from './App'

worker.start()
ReactDOM.render(<App />, document.getElementById('app'))
