const bubbleMessage = (message, delay = 2000) => {
  const bubblingOverlay = document.createElement('div')

  bubblingOverlay.classList.add('bubbling-overlay')

  document.body.appendChild(bubblingOverlay)

  const bubble = document.createElement('div')

  bubble.textContent = message
  bubble.classList.add('bubble', 'shadow')

  bubblingOverlay.appendChild(bubble)

  setTimeout(() => {
    bubble.classList.add('bubbling')
  }, 0)

  setTimeout(() => {
    bubble.classList.remove('bubbling')
    bubble.addEventListener('transitionend', () => {
      bubblingOverlay.remove()
    })
  }, delay)
}

export default bubbleMessage