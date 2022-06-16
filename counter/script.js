const countContainer = document.querySelector('.main__count')
const count = document.querySelector('.main__count .count')
const subCount = document.querySelector('.main__count .sub__count')
const btns = document.querySelectorAll('.main__btns button')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    animateButtons(e.target)
    handleButtons(e.target.dataset.action)

    animateCount()
    handleCount()
  })
})

function animateButtons(button) {
  button.style.animation = 'clicked .15s 2 alternate'
  setTimeout(() => {
    button.style.animation = ''
  }, 150)
}

function handleButtons(action) {
  switch (action) {
    case 'decrement':
      count.textContent = +count.textContent - 1
      handleSubCount('-1')
      break
    case 'increment':
      count.textContent = +count.textContent + 1
      handleSubCount('+1')
      break
    case 'reset':
      count.textContent = 0
      handleSubCount('0!')
      break
    default:
      count.textContent = 0
      break
  }
}

function animateCount() {
  countContainer.style.animation = 'changed .15s 2 alternate'
  setTimeout(() => {
    countContainer.style.animation = ''
  }, 150)

  subCount.style.animation = 'subCount .15s 2 alternate'
  setTimeout(() => {
    subCount.style.animation = ''
  }, 150)
}

function handleCount() {
  if (count.textContent > 0) {
    count.style.color = 'rgb(21 128 61)'
  }

  if (count.textContent < 0) {
    count.style.color = 'rgb(185 28 28)'
  }

  if (count.textContent == 0) {
    count.style.color = 'rgb(0 0 0)'
  }
}

function handleSubCount(value) {
  subCount.textContent = value

  if (subCount.textContent > 0) {
    subCount.style.color = 'rgb(21 128 61)'
  }

  if (subCount.textContent < 0) {
    subCount.style.color = 'rgb(185 28 28)'
  }

  if (subCount.textContent == 0) {
    subCount.style.color = 'rgb(0 0 0)'
  }

  setTimeout(() => {
    subCount.textContent = ''
  }, 150)
}
