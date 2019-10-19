import React, { useState } from 'react'
import Hamburger from './Hamburger'
import './collapsible-drawer.scss'

function CollapsibleDrawer({ children }) {
  const [isExpanded, setExpanded] = useState(false)

  const expandedClass = isExpanded ? 'open' : ''

  return (
    <div className="collapsible-drawer">
      <div className={`hamburger`}>
        <Hamburger
          isExpanded={isExpanded}
          onClickHandler={() => setExpanded(!isExpanded)}
        />
      </div>
      <div className={`collapsible-menu ${expandedClass}`}>{children}</div>
    </div>
  )
}

export default CollapsibleDrawer
