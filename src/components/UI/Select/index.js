import React from 'react'

const Select = (props) => {
  const { onChange, options, withAll } = props

  return (
    <select onChange={ onChange }>
      { withAll && <option value='all'>ALL</option> }
      { options.map((option, i) => (
        <option value={ option.value } key={ i }>
          { option.label.toUpperCase() }
        </option>
      )) }
    </select>
  )
}

export default Select
