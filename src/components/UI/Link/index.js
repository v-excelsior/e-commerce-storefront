import React from 'react'
import './style.scss'

import { NavLink as RouteLink } from 'react-router-dom'

import CONFIG from 'config'

const getClasses = (type, className) => {
  const classes = ['link']

  if (type) {
    classes.push('link-' + type)
  }

  if (className?.length) {
    classes.push(className)
  }

  return classes.join(' ')
}

const Link = (props) => {

  const { to, email, href, type, className } = props

  const renderLink = () => {
    if (to) {
      return (
        <RouteLink
          exact
          to={ to }
          className={ getClasses(type, className) }
          activeClassName='active-link'
        >
          { props.children || to.replace(/\//, '') }
        </RouteLink>
      )
    }

    if (email) {
      return (
        <a
          href={ `mailto:${ CONFIG.contacts.email }` }
          target='_blank'
          rel='noopener noreferrer'
          className={ getClasses(type, className) }
        >
          { props.children || CONFIG.contacts.email }
        </a>
      )
    }

    if (href) {
      return (
        <a
          href={ href }
          target='_blank'
          rel='noopener noreferrer'
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