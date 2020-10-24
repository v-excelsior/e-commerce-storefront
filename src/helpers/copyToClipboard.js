const copyToClipboard = text => {
  const fakeInput = document.createElement('input')
  fakeInput.value = text

  document.body.appendChild(fakeInput)

  fakeInput.select()
  fakeInput.setSelectionRange(0, 99999)

  document.execCommand('copy')

  fakeInput.remove()
}

export default copyToClipboard