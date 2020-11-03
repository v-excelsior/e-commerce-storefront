import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './style.scss'

import CONFIG from 'config'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'

const renderHeaderLink = () => (
  <Link to='/' className='header-link'>
    { CONFIG.appName }
  </Link>
)

const Header = () => {
  const isMainPage = useLocation().pathname === '/'

  return (
    <header className='header'>
      <div className='header-company-name container'>
        {
          isMainPage
            ? CONFIG.appName
            : renderHeaderLink()
        }

        <button className='button button-menu'>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
