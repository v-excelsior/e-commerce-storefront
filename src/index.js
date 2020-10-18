import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles/index.scss'
import CONFIG from './config'

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)

document.title = CONFIG.name