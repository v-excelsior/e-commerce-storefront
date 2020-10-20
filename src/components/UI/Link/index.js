import React from 'react'
import './style.scss'

import { Link as RouteLink } from 'react-router-dom'

import CONFIG from '../../../config'

const getClasses = (type, className) => {
  const classes = ['link']

  if (type) {
    classes.push(type)
  }

  if (className?.length) {
    classes.push(...className)
  }

  return classes.join(' ')
}

const Link = (props) => {

  const { to, email, href, type, className } = props

  const renderLink = () => {
    if (to) {
      return (
        <RouteLink
          exact="true"
          to={ to }
          className={ getClasses(type, className) }
        >
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
        <a
          href={ `mailto:${ CONFIG.email }` }
          target="_blank"
          rel="noopener noreferrer"
          className={ getClasses(type, className) }
        >
          { props.children || CONFIG.email }
        </a>
      )
    }

    if (href) {
      return (
        <a
          href={ href }
          target="_blank"
          rel="noopener noreferrer"
          className={ getClasses(type, className) }
        >
          { props.children || href }
        </a>
      )
    }
  }

  return renderLink()
}

export default Link