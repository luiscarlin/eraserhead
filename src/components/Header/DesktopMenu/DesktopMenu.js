import React from 'react'

function DesktopMenu({ menuItems }) {
  return (
    <ul className="desktop-menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.to}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default DesktopMenu
