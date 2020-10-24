const bubbleMessage = (message, delay = 2000) => {
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