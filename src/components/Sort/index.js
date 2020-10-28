import React from 'react'
import './style.scss'

import { arrow } from 'components/UI/icons-base64'

const Sort = (props) => {

  const { onAsc, onDesc, label } = props

  return (
    <div className='sort'>
      { label && (
        <span className='sort-label'>
          { label }
        </span>
      ) }

      <button onClick={ onAsc }>
        <img src={ arrow } alt='ascending btn' />
      </button>

      <button onClick={ onDesc }>
        <img src={ arrow } alt='descending btn' />
      </button>
    </div>
  )
}

export default Sort
