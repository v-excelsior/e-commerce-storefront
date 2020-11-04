import React from 'react'

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'

const MenuButton = () => {
  return (
    <button className='button button-menu'>
      <MenuIcon className='icon-menu' />
    </button>
  )
}

export default MenuButton
