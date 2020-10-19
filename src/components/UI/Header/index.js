import React from 'react'
import './style.scss'

import CONFIG from '../../../config'

const Header = () => {

  return (
    <header className="header">
      <div className="header-company-name">
        { CONFIG.appName }
      </div>
    </header>
  )
}

export default Header
