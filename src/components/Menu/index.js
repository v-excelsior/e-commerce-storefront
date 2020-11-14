import React, { useRef } from 'react'

import './style.scss'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg'
import { Link } from 'components/UI'

const Menu = () => {
  const menuRef = useRef(null)

  const toggleMenuVisibility = (isVisible) => {
    menuRef.current.classList.toggle('menu-body-open', isVisible)
  }

  return (
    <div className='menu'>
      <button
        className='button button-menu'
        onClick={ () => toggleMenuVisibility(true) }
      >
        <MenuIcon className='icon-menu icon-menu--open' />
      </button>

      <div className='menu-body' ref={ menuRef }>
        <nav className='menu-nav'>
          <ul className='nav-list'>
            <li className='nav-item' onClick={ () => toggleMenuVisibility(false) }>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item' onClick={ () => toggleMenuVisibility(false) }>
              <Link to='/contacts' className='nav-link'>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className='button button-menu button-menu--close'
          onClick={ () => toggleMenuVisibility(false) }
        >
          <CrossIcon className='icon-menu icon-menu--close' />
        </button>
      </div>
    </div>
  )
}

export default Menu
