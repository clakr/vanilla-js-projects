const summaryBtn = document.querySelectorAll(
  '.faqs__item--summary'
)

summaryBtn.forEach((item) => {
  const minusBtn = item.querySelector('.minusBtn')
  const plusBtn = item.querySelector('.plusBtn')

  item.addEventListener('click', () => {
    minusBtn.classList.toggle('show')
    plusBtn.classList.toggle('show')

    item.nextElementSibling.classList.toggle('collapsed')
  })
})
