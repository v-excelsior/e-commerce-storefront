import React from 'react'

import { Link as RouteLink } from 'react-router-dom'

import CONFIG from '../../../config'

const Link = (props) => {

  const { to, email, href, type } = props

  console.log('to', to, props.children)

  const renderLink = () => {
    if (to) {
      return (
        <RouteLink exact="true" to={ to }>
          { props.children || (
            to === '/'
              ? 'Empty link'
              : to.replace(/\//, '')
          ) }
        </RouteLink>
      )
    }

    if (email) {
      return (
        <a href={ `mailto:${ CONFIG.email }` } target="_blank" rel="noopener noreferrer">
          { props.children || CONFIG.email }
        </a>
      )
    }

    if (href) {
      return (
        <a href={ href } target="_blank" rel="noopener noreferrer">
          { props.children || href }
        </a>
      )
    }
  }

  return (
    <div className={ `link ${ type }` }>
      { renderLink() }
    </div>
  )
}

export default Link