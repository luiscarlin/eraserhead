import React from 'react'
import './header.scss'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

function Header() {
  const menuItems = [
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
        <DesktopMenu menuItems={menuItems} />
      </nav>
      <nav className="mobile-menu">
        <MobileMenu menuItems={menuItems} />
      </nav>
    </header>
  )
}

export default Header
