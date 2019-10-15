import React from 'react'
import './mobile-menu.scss'

function MobileMenu() {
  return <Burger />
}

function Burger() {
  return (
    <button className="burger">
      <div className="bar top open" />
      <div className="bar middle" />
      <div className="bar bottom" />
    </button>
  )
}

export default MobileMenu
