// DOM Variables

const aside = document.querySelector('aside')
const formGroup = document.querySelector('.form-group')

window.addEventListener('DOMContentLoaded', async () => {
  if (!localStorage.getItem('recipe')) await fetchData()

  const data = JSON.parse(
    localStorage.getItem('recipe')
  ).recipes

  addFilter(
    '#cuisine',
    data.map((recipe) => recipe.cuisines)
  )

  addFilter(
    '#diets',
    data.map((recipe) => recipe.diets)
  )

  addFilter(
    '#dishTypes',
    data.map((recipe) => recipe.dishTypes)
  )

  countFilters()
  handleSelect()

  // To change
  console.log(data)
  document.querySelector('main').innerHTML = data
    .map((recipe) => {
      return `${recipe.title}<br><br>`
    })
    .join('')
})

async function fetchData() {
  const api = await fetch(
    'https://api.spoonacular.com/recipes/random?apiKey=4b8d25c40e7b4315b9d899056c01c735&number=10'
  )
  const data = await api.json()

  localStorage.setItem('recipe', JSON.stringify(data))
}

function addFilter(elementID, array) {
  array = [...new Set(array.flat().sort())]
  document.querySelector(elementID).innerHTML = array
    .map(
      (name) =>
        `
        <label class="form-group__item">
          <input type="checkbox" />
          ${name}
        </label>
        `
    )
    .join('')
}

function countFilters() {
  const filterCount = document.querySelectorAll(
    '.form-group__item'
  ).length

  document.querySelector('#filterCount').innerText =
    filterCount
}

function handleSelect() {
  aside.addEventListener('change', () => {
    const checkedCount =
      aside.querySelectorAll('input:checked').length

    document.querySelector('#checkCount').innerText =
      checkedCount
  })
}
