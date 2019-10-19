import React from 'react'
import './hamburger.scss'

function Hamburger({ isExpanded, onClickHandler }) {
  const openClass = isExpanded ? 'open' : ''

  return (
    <button className="hamburger" onClick={onClickHandler}>
      <div className={`bar top ${openClass}`} />
      <div className={`bar middle ${openClass}`} />
      <div className={`bar bottom ${openClass}`} />
    </button>
  )
}

export default Hamburger
