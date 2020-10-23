const bubbleMessage = (message, delay = 2000) => {

  const input = document.createElement('input')
  input.id = 'copyBlock'
  document.body.appendChild(input)

  const copyBlock = document.querySelector('#copyBlock')
  copyBlock.value = 'some text' + Math.random()

  copyBlock.select()
  copyBlock.setSelectionRange(0, 99999)

  document.execCommand('copy')

  copyBlock.remove()

  const bubblingOverlay = document.createElement('div')

  bubblingOverlay.classList.add('bubbling-overlay')

  document.body.appendChild(bubblingOverlay)

  const bubble = document.createElement('div')

  bubble.textContent = 'Copied!'

  bubble.classList.add('bubble')

  bubblingOverlay.appendChild(bubble)

  setTimeout(() => {
    bubble.classList.add('bubbling')
  }, 0)

  setTimeout(() => {
    bubble.classList.remove('bubbling')
    bubble.addEventListener('transitionend', () => {
      bubblingOverlay.remove()
    })
  }, 2000)
}

export default bubbleMessage