import React from 'react'
import './style.scss'

import { Link } from '../../components/UI'

import CONFIG from '../../config'

const Contacts = () => {
  return (
    <div className="container contacts">
      <table className="contacts-table">
        <tr>
          <td>Email</td>
          <td><Link email /></td>
        </tr>

        <tr>
          <td>Number</td>
          <td>8800-300-200</td>
        {/*  need add copy to buffer*/}
        </tr>

        <tr>
          <td>Address</td>
          <td>My address</td>
        {/*  link what open address on the map*/}
        </tr>

        { CONFIG.otherContacts?.length && CONFIG.otherContacts.map(
          (contact, i) => (
            <tr key={ i }>
              <td>{ contact.name }</td>
              <td>{ contact.data }</td>
            </tr>
          )
        ) }
        <Link type='block' to='/home' className={ ['hoo', 'gaa'] }>Route</Link>
        <Link to='/home' />
        <Link to='/'>Route</Link>
        <Link to='/' />
        <Link email>My email</Link>

        <Link href='www.google.com'>Some text</Link>
        <Link href='www.google.com' />
      </table>
    </div>
  )
}

export default Contacts