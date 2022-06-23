// DOM Variables

const openBtn = document.querySelector('#openModal')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__header--close')

// Event Listeners

openBtn.addEventListener('click', () => {
  modal.style.display = 'grid'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})
