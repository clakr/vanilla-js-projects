let typingInterval

const faqsItems = document.querySelectorAll('.faqs__item')

const search = document.querySelector('input')

faqsItems.forEach((item) => {
  const minusBtn = item.querySelector('.minusBtn')
  const plusBtn = item.querySelector('.plusBtn')
  const details = item.querySelector('.faqs__item--details')

  item.addEventListener('click', () => {
    minusBtn.classList.toggle('show')
    plusBtn.classList.toggle('show')

    details.classList.toggle('collapsed')
  })
})

search.addEventListener('input', (e) => {
  clearTimeout(typingInterval)
  typingInterval = setTimeout(
    () => searchQuery(e.target.value),
    500
  )
})

function searchQuery(value = value.toLowerCase()) {
  initializeItems()

  const filter = Array.from(faqsItems)
    .filter((item) => {
      const h3 = item
        .querySelector('h3')
        .innerText.toLowerCase()
      const p = item
        .querySelector('p')
        .innerText.toLowerCase()

      if (h3.search(value) >= 0 || p.search(value) >= 0) {
        return item
      }
    })
    .forEach((item) => item.classList.remove('hidden'))
}

function initializeItems() {
  faqsItems.forEach((item) => {
    item.classList.add('hidden')
  })
}
