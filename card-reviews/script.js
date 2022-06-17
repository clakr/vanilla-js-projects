const cardContainer = document.querySelector('.review__container')

window.addEventListener('load', () => {
  if (!localStorage.getItem('data')) fetchData()

  const data = JSON.parse(localStorage.getItem('data'))
  console.log(data[0])
})

async function fetchData() {
  const api = await fetch('https://testimonialapi.toolcarton.com/api')
  const data = await api.json()

  localStorage.setItem('data', JSON.stringify(data))
}
