const mainCount = document.querySelector('.main__count')
const count = document.querySelector('.main__count .count')
const subCount = document.querySelector('.main__count .sub__count')
const btns = document.querySelectorAll('.main__btns button')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    animate(e.target)
    animate(mainCount)
    animate(subCount)

    count.textContent = handleOperation(
      e.target.dataset.action,
      +count.textContent
    )

    count.style.color = colorValue(count.textContent)
  })
})

function animate(element, animateName = element.dataset.animate) {
  element.style.animation = `${animateName} .15s 2 alternate`
  setTimeout(() => {
    element.style.animation = ''
  }, 150)
}

function handleOperation(action, currentCount) {
  if (action == 'decrement') {
    handleSubCount('-1')
    return currentCount - 1
  }
  if (action == 'increment') {
    handleSubCount('+1')
    return currentCount + 1
  }
  if (action == 'reset') {
    handleSubCount('0!')
    return currentCount * 0
  }

  return undefined
}

function handleSubCount(value) {
  subCount.textContent = value
  subCount.style.color = colorValue(value)

  setTimeout(() => {
    subCount.textContent = ''
  }, 150)
}

function colorValue(value) {
  if (value > 0) {
    return 'var(--green-dark)'
  }

  if (value < 0) {
    return 'var(--red-dark)'
  }

  return 'rgb(0 0 0)'
}
