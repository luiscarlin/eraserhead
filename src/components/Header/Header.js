import React from 'react'
import './header.scss'
import MobileMenu from '../MobileMenu'

function Header() {
  const menuIems = [
    {
      label: 'origins',
      to: '/',
    },
    {
      label: 'rules',
      to: '/',
    },
    {
      label: 'ranking',
      to: '/',
    },
  ]
  return (
    <header className="header">
      <a href="/">logo</a>
      <nav className="not-mobile">
        <ul className="navbar">
          {menuIems.map(item => (
            <li>
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mobile-menu">
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Header
