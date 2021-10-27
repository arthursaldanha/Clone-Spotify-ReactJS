import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Styles
import ResetCSS from "./styles/ResetCSS"

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
