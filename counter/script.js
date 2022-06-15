const count = document.querySelector('.main__count')
const btns = document.querySelectorAll('.main__btns button')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnAction = e.target.dataset.action
    switch (btnAction) {
      case 'decrement':
        count.textContent = +count.textContent - 1
        break
      case 'increment':
        count.textContent = +count.textContent + 1
        break
      case 'reset':
        count.textContent = 0
        break
      default:
        count.textContent = 0
        break
    }
  })
})
