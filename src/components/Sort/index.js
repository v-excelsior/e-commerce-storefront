import React from 'react'

import './style.scss'

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-right.svg'

const Sort = (props) => {
  const { onAsc, onDesc, label } = props

  const setSort = (target, flag) => {
    target.classList.add('active')
    flag ? onAsc() : onDesc() //make it as callback
  }

  return (
    <div className='sort'>
      { label && (
        <span className='sort-label'>
          { label }
        </span>
      ) }

      <button
        onClick={ (e) => setSort(e.target, true) }
        className='button button-sort button-ascending'
      >
        <ArrowIcon className='button-sort-icon' />
      </button>

      <button
        onClick={ (e) => setSort(e.target, false) }
        className='button button-sort button-descending'
      >
        <ArrowIcon className='button-sort-icon' />
      </button>
    </div>
  )
}

export default Sort
