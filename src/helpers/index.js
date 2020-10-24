

import bubbleMessage from './bubbleMessage'
import copyToClipboard from './copyToClipboard'

const sortString = (a, b) => a.name > b.name ? 1 : -1
const onlyNumbers = s => s.replace( /^\D+/g, '')

export {
  sortString,
  onlyNumbers,
  bubbleMessage,
  copyToClipboard,
}