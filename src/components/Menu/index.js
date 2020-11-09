import React, { useRef } from 'react'

import './style.scss'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { Link } from 'components/UI'

const Menu = () => {
  const menuRef = useRef(null)

  const toggleMenuVisibility = () => {
    menuRef.current.classList.toggle('menu-body-open')
  }

  return (
    <div className='menu'>
      <button
        className='button button-menu'
        onClick={ () => toggleMenuVisibility() }
      >
        <MenuIcon className='icon-menu' />
      </button>

      <div className='menu-body' ref={ menuRef }>
        <nav className='menu-nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/contacts' className='nav-link'>
                Contacts
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contacts' className='nav-link'>
                Test
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contacts' className='nav-link'>
                Test looooong gugl werty rewty rerer kok sok jok
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu
