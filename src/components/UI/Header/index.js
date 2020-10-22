import React from 'react'
import './style.scss'

import Link from '../Link'

import CONFIG from '../../../config'

const Header = () => {

  return (
    <header className="header">
      <div className="header-company-name">
        <Link to='/' type='block'>{ CONFIG.appName }</Link>
      </div>
    </header>
  )
}

export default Header
