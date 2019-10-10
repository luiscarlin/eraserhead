import React from 'react'
import './mobile-menu.scss'

function MobileMenu() {
  return <Burger />
}

function Burger() {
  return (
    <button className="burger">
      <div className="bar top open" />
      <div className="bar middle open" />
      <div className="bar bottom open" />
    </button>
  )
}

export default MobileMenu
