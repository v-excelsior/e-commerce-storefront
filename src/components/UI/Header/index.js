import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './style.scss'

import CONFIG from 'config'

const renderHeaderLink = () => (
  <Link to='/' className='header-link'>
    { CONFIG.appName }
  </Link>
)

const Header = () => {
  const isMainPage = useLocation().pathname === '/'

  return (
    <header className='header'>
      <div className='header-company-name'>
        {
          isMainPage
            ? CONFIG.appName
            : renderHeaderLink()
        }
      </div>
    </header>
  )
}

export default Header
