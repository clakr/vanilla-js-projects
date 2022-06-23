// DOM Variables

const navPlan = document.querySelector('.nav__plan')
const navProfile = document.querySelector('.nav__profile')

const subPlan = document.querySelector('.sub__plan')
const subOptions = document.querySelector('.sub__options')

// Event Listeners

navPlan.addEventListener('click', () => {
  subPlan.classList.toggle('show')
})

navProfile.addEventListener('click', () => {
  subOptions.classList.toggle('show')
})
