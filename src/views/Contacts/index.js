import React from 'react'

import { Link } from '../../components/UI'

const Contacts = () => {
  return (
    <div className="contacts">
      <Link to='/home' className={ ['hoo', 'gaa'] }>Route</Link>
      <Link to='/home' />
      <hr />
      <Link to='/'>Route</Link>
      <Link to='/' />
      <hr />
      <Link email>My email</Link>
      <Link email/>
      <hr />
      <Link href='www.google.com'>Some text</Link>
      <Link href='www.google.com'/>
    </div>
  )
}

export default Contacts