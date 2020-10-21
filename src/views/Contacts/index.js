import React from 'react'

import { Link } from '../../components/UI'

const Contacts = () => {
  return (
    <div className="contacts">
      <Link type='block' to='/home' className={ ['hoo', 'gaa'] }>Route</Link>
      <Link to='/home' />
      <Link to='/'>Route</Link>
      <Link to='/' />
      <Link email>My email</Link>
      <Link email/>
      <Link href='www.google.com'>Some text</Link>
      <Link href='www.google.com'/>
    </div>
  )
}

export default Contacts