import React, { useState } from 'react'
import './mobile-menu.scss'

function MobileMenu() {
  return <Burger />
}

function Burger() {
  let open = useState(false)
  return (
    <button className="burger">
      <div className="bar top" />
      <div className="bar middle" />
      <div className="bar bottom" />
    </button>
  )
}

export default MobileMenu
