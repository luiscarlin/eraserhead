import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global.scss'

function Root() {
  return <App />
}

ReactDOM.render(<Root />, document.getElementById('app'))
