import React from 'react'
import './style.scss'

import { useLocation } from 'react-router-dom'

import Link from '../Link'

import CONFIG from 'config'

const Header = () => {
  const isMain = useLocation().pathname === '/'

  return (
    <header className="header">
      <div className="header-company-name">
        {
          isMain
            ? CONFIG.appName
            : (
              <Link to='/' type='block'>
                { CONFIG.appName }
              </Link>
            )
        }
      </div>
    </header>
  )
}

export default Header
