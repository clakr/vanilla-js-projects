const summaryBtn = document.querySelectorAll(
  '.faqs__item--summary'
)

summaryBtn.forEach((item) => {
  const minusBtn = item.querySelector('.minusBtn')
  const plusBtn = item.querySelector('.plusBtn')

  item.addEventListener('click', () => {
    minusBtn.style.display = 'block'
    plusBtn.style.display = 'none'
  })
})
