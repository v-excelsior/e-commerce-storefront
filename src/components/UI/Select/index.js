import React from 'react'
import './style.scss'

import d from 'i18n'

const Select = (props) => {
  const { onChange, options, withAll } = props

  return (
    <select onChange={ onChange } className='vx-select'>
      { withAll && <option value='all'>{ d.all.toUpperCase() }</option> }
      { options.map((option, i) => (
        <option value={ option.value } key={ i }>
          { option.label.toUpperCase() }
        </option>
      )) }
    </select>
  )
}

export default Select
