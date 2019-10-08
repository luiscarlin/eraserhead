import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <header>
      <a href="/">logo</a>
      <nav>
        <ul>
          <li>
            <a href="/">origins</a>
          </li>
          <li>
            <a href="/">rules</a>
          </li>
          <li>
            <a href="/">ranking</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
