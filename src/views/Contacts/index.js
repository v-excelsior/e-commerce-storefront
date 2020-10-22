import React from 'react'
import './style.scss'

import { Link } from '../../components/UI'

import CONFIG from '../../config'

const Contacts = () => {
  const { otherContacts, address, telephone } = CONFIG.contacts

  const ct = 'contacts-table-cell contact-type '
  const cd = 'contacts-table-cell contact-data '

  const someMethod = () => {
    //need refactoring and improvement
    const input = document.createElement('input')
    input.id = 'copyBlock'
    document.body.appendChild(input)

    const copyBlock = document.querySelector('#copyBlock')
    copyBlock.value = 'some text' + Math.random()

    copyBlock.select()
    copyBlock.setSelectionRange(0, 99999)

    document.execCommand('copy')

    copyBlock.remove()
  }

  return (
    <div className="contacts">
      <table className="contacts-table">
        <tbody>
        <tr className="contact">
          <td className={ ct }>Email</td>
          <td className={ cd }><Link email /></td>
        </tr>

        <tr
          onClick={ () => someMethod() }
          className="contact"
        >
          <td className={ ct }>Telephone</td>
          <td className={ cd + 'contact-data__telephone link' }>
            { telephone }
          </td>
        </tr>

        <tr className="contact">
          <td className={ ct }>Address</td>
          <td className={ cd }>
            {/*  why link not opened with address?*/ }
            <Link href={ 'https://google.com/maps/search/' + address.replace(/\s/g, '+') }>
              { address }
            </Link>
          </td>
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