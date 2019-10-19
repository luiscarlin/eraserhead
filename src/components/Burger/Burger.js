import React, { useState } from 'react'
import './burger.scss'

function Burger() {
  const [isExpanded, setExpanded] = useState(false)

  const openClass = isExpanded ? 'open' : ''

  return (
    <button className="burger" onClick={() => setExpanded(!isExpanded)}>
      <div className={`bar top ${openClass}`} />
      <div className={`bar middle ${openClass}`} />
      <div className={`bar bottom ${openClass}`} />
    </button>
  )
}

export default Burger
