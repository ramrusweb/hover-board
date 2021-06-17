const board = document.querySelector('#board')
const colors = ['#ca9f92', '#c993d4', '#59add0', '#f9cd97', '#b2e289', '#d1c6bf', '#e3d9b0', '#b1c27a']
const SQUARES_NUMBER = 520

for (let i = 0; i < SQUARES_NUMBER;  i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () =>
    setColor(square))

  square.addEventListener('mouseleave', () =>
    removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}