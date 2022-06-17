const main = document.querySelector('main')

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('data')) fetchData()

  const data = JSON.parse(localStorage.getItem('data'))

  const createCard = data.map((review) => {
    return `<div class="card__item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="chat-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="chat-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
      />
      <path
        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
      />
    </svg>
    <div class="card__avatar">
      <img src="${review.avatar}" alt="" />
    </div>
    <div class="card__body">
      <div class="card__details">
        <p class="card__name">${review.name}</p>
        <p class="card__position">
          ${review.designation} at
          <span class="card__location">${review.location}</span>
        </p>
      </div>
      <div class="card__description">
        <p>
          ${review.message}
        </p>
      </div>
    </div>
  </div>`
  })

  main.innerHTML = createCard.join('')
})

async function fetchData() {
  const api = await fetch('https://testimonialapi.toolcarton.com/api')
  const data = await api.json()

  localStorage.setItem('data', JSON.stringify(data))
}
