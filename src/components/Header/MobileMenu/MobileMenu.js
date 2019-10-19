import React, { useState } from 'react'
import Hamburger from './Hamburger'
import './mobile-menu.scss'

function MobileMenu({ menuItems }) {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <React.Fragment>
      <Hamburger
        isExpanded={isExpanded}
        onClickHandler={() => setExpanded(!isExpanded)}
      />
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.label}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default MobileMenu
