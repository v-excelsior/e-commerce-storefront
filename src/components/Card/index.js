import React from 'react'
import './style.scss'

import CONFIG from 'config'

const Card = (props) => {

  const { name, imageUrl, price, description } = props

  return (
    <div className='card'>
      <div className='card-head'>
         <span className='card-label card-label__name'>
           { name }
         </span>

        <img
          className='card-image'
          src={ imageUrl }
          alt={ name }
        />

        <span className='card-label card-label__price'>
         { `${ price } ${ CONFIG.currency }` }
        </span>
      </div>

      { description && (
        <span className='card-description'>
          { description }
        </span>
      ) }
    </div>
  )
}

export default Card
