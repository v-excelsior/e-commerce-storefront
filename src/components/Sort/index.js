import React from 'react'
import './style.scss'

import { ReactComponent as Arrow } from 'assets/icons/arrow-right.svg'

const Sort = (props) => {

  const { onAsc, onDesc, label } = props

  return (
    <div className='sort'>
      { label && (
        <span className='sort-label'>
          { label }
        </span>
      ) }

      <button
        onClick={ onAsc }
        className='button button-sort button-ascending'
      >
        <Arrow className='button-sort-icon'/>
      </button>

      <button
        onClick={ onDesc }
        className='button button-sort button-descending'
      >
        <Arrow className='button-sort-icon'/>
      </button>
    </div>
  )
}

export default Sort
