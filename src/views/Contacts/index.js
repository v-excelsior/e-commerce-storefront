import React from 'react'
import './style.scss'

import { Link } from 'components/UI'
import { onlyNumbers, bubbleMessage, copyToClipboard } from 'helpers'

import CONFIG from 'config'
import dictionary from 'i18n'

const Contacts = () => {
  const { otherContacts, address, telephone, email } = CONFIG.contacts

  const ct = 'contacts-table-cell contact-type '
  const cd = 'contacts-table-cell contact-data '

  const copyNumber = () => {
    copyToClipboard(onlyNumbers(telephone))
    bubbleMessage(dictionary.greeting)
  }

  return (
    <div className="contacts">
      <table className="contacts-table">
        <tbody>
        { email && (
          <tr className="contact">
            <td className={ ct }>Email</td>
            <td className={ cd }><Link email /></td>
          </tr>
        ) }

        { telephone && (
          //TODO: trim telephone
          <tr
            onClick={ () => copyNumber() }
            className="contact"
          >
            <td className={ ct }>Telephone</td>
            <td className={ cd + 'contact-data__telephone link' }>
              { telephone }
            </td>
          </tr>
        ) }

        { address && (
          <tr className="contact">
            <td className={ ct }>Address</td>
            <td className={ cd }>
              {/*  why link not opened with address?*/ }
              <Link href={ 'https://google.com/maps/search/' + address.replace(/\s/g, '+') }>
                { address }
              </Link>
            </td>
          </tr>
        ) }

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