import React from 'react'
import './style.scss'

import { arrow } from 'components/UI/icons-base64'

const Sort = (props) => {

  const { onAsc, onDesc, label } = props

  return (
    <div className='sort'>
      <span className='sort-label'>
        {label}
      </span>
      <button>
        <img src={ arrow } alt='ascending btn'/>
      </button>
      <button>
        <img src={ arrow } alt='descending btn'/>
      </button>
    </div>
  )
}

export default Sort
