import bubbleMessage from './bubbleMessage'
import copyToClipboard from './copyToClipboard'

const sortString = (a, b) => a > b ? 1 : -1
const sortObjByProp = (prop) => (a, b) => a[prop] > b[prop] ? 1 : -1
const onlyNumbers = s => s.replace(/\D+/g, '')

export {
  sortString,
  sortObjByProp,
  onlyNumbers,
  bubbleMessage,
  copyToClipboard,
}