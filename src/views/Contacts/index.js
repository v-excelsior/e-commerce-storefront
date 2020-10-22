import React from 'react'
import './style.scss'

import { Link } from '../../components/UI'

import CONFIG from '../../config'

const Contacts = () => {
  const { otherContacts, address, telephone } = CONFIG.contacts

  const ct = 'contacts-table-cell contact-type '
  const cd = 'contacts-table-cell contact-data '

  return (
    <div className="contacts">
      <table className="contacts-table">
        <tbody>
          <tr className="contact">
            <td className={ ct }>Email</td>
            <td className={ cd }><Link email /></td>
          </tr>

          <tr className="contact">
            <td className={ ct }>Telephone</td>
            <td className={ cd + 'contact-data__telephone' }>{ telephone }</td>
            {/*  need add copy to buffer*/ }
          </tr>

          <tr className="contact">
            <td className={ ct }>Address</td>
            <td className={ cd }>
              <Link href={ 'https://maps.google.com/' + address }>
                { address }
              </Link>
            </td>
            {/*  link what open address on the map*/ }
          </tr>

          { otherContacts?.length && otherContacts.map(
            (contact, i) => (
              <tr className="contact" key={ i }>
                <td className={ ct }>{ contact.type }</td>
                <td className={ cd }>{ contact.data }</td>
              </tr>
            )
          ) }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts