import React from 'react'
import './style.scss'

import { Link } from '../../components/UI'

import CONFIG from '../../config'

const Contacts = () => {
  const { otherContacts, address, telephone, email } = CONFIG.contacts

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

    const wrapper = document.createElement('div')

    wrapper.style.cssText = `
      position: fixed;
      width:100vw;
      top:0;
      bottom:0;
      left:0;
      background-color: green;
      transition:3s;
    `

    document.body.appendChild(wrapper)

    const plashka = document.createElement('div')

    plashka.textContent = 'Copied!'

    plashka.style.cssText = `
      position: absolute;
      visibility:hidden;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
      background-color: gray;
    `

    wrapper.appendChild(plashka)

    plashka.style.visibility = 'visible'
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
          <tr
            onClick={ () => someMethod() }
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