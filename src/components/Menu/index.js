import React, { useRef } from 'react'

import './style.scss'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'

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
        <ul>
          <li>Menu</li>
          <li>Not menu</li>
          <li>Hello</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
