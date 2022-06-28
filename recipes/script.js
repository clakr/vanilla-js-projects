window.addEventListener('DOMContentLoaded', async () => {
  if (!localStorage.getItem('recipe')) await fetchData()

  const data = JSON.parse(localStorage.getItem('recipe'))
})

async function fetchData() {
  const api = await fetch(
    'https://api.spoonacular.com/recipes/random?apiKey=4b8d25c40e7b4315b9d899056c01c735&number=10'
  )
  const data = await api.json()

  localStorage.setItem('recipe', JSON.stringify(data))
}
