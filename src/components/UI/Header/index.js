import React from 'react'
import { useLocation } from 'react-router-dom'

import './style.scss'

import Link from '../Link'

import CONFIG from 'config'

const Header = () => {
  const isMainPage = useLocation().pathname === '/'

  return (
    <header className="header">
      <div className="header-company-name">
        {
          isMainPage
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
