const hamburgerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const navLinks = document.querySelector('.nav__links')

hamburgerBtn.addEventListener('click', (e) => {
  navLinks.classList.add('display')
})
closeBtn.addEventListener('click', (e) => {
  navLinks.classList.remove('display')
})
