import bubbleMessage from './bubbleMessage'

const sortString = (a, b) => a > b ? 1 : -1
const sortObjByProp = (prop) => (a, b) => a[prop] > b[prop] ? 1 : -1
const onlyNumbers = s => s.replace(/\D+/g, '')
const copyToClipboard = text => window.navigator.clipboard.writeText(text)

export {
  sortString,
  sortObjByProp,
  onlyNumbers,
  bubbleMessage,
  copyToClipboard,
}