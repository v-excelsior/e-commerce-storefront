import React, { useState } from 'react'

import './style.scss'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'

const Menu = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  return (
    <div className='menu'>
      <button className='button button-menu' onClick={ () => {
        setIsMenuShown(!isMenuShown)
      } }>
        <MenuIcon className='icon-menu' />
      </button>

      { isMenuShown && (
        <div>
          <ul>
            <li>Menu</li>
            <li>Not menu</li>
            <li>Hello</li>
          </ul>
        </div>
      ) }
    </div>
  )
}

export default Menu
