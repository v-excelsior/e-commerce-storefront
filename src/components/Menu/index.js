import React, { useRef } from 'react'

import './style.scss'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { Link } from 'components/UI'
import CONFIG from '../../config'

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
        <nav>
          <ul>
            <li>
              <Link to='/contacts' className='nav-link'>
                Contacts
              </Link>
            </li>
            <li>Not menu</li>
            <li>Hello</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu
