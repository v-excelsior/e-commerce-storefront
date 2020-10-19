import React from 'react'

import { Link } from '../../components/UI'

const Contacts = () => {
  return (
    <div className="contacts">
      <Link to='/home'>Route</Link>
      <Link to='/home'/>
      <Link to='/'>Route</Link>
      <Link to='/'/>
      <Link mail>My email</Link>
      <Link mail></Link>
      <Link href='www.google.com'>Some text</Link>
      <Link href='www.google.com'/>
    </div>
  )
}

export default Contacts