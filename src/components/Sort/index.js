import React from 'react'
import './style.scss'

const arrow = require('assets/icons/arrow.svg')

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
        <svg className='arrow' alt='ascending btn' >
          <use xlinkHref={ arrow }></use>
        </svg>
      </button>

      <button
        onClick={ onDesc }
        className='button button-sort button-descending'
      >
        <svg className='arrow-down' alt='descending btn' >
          <use xlinkHref={ arrow }></use>
        </svg>
      </button>
    </div>
  )
}

export default Sort
