import React from 'react'
import CollapsibleDrawer from './CollapsibleDrawer'
import './header.scss'

function Header() {
  return (
    <header className="header">
      <a href="/">logo</a>
      <nav className="not-mobile">
        <MenuItems className="desktop-menu" />
      </nav>
      <nav className="mobile">
        <CollapsibleDrawer>
          <MenuItems className="mobile-menu" />
        </CollapsibleDrawer>
      </nav>
    </header>
  )
}

const MenuItems = ({ className }) => {
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
    <ul className={className}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.to}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default Header
