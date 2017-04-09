const PRIZE_COUNT = 120

function placePrizes(row) {
  for (let i = 0; i < PRIZE_COUNT; i ++) {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container p-2 col-4'

    const card = Card({
      imageSrc: 'http://lorempixel.com/400/400/cats/',
      headerText: i,
      textContent: i,
    })
    cardContainer.appendChild(card)
    row.appendChild(cardContainer)
  }
}

function spin() {
  const winningCard = Math.round(Math.random() * PRIZE_COUNT)
  console.log(winningCard)
  document.querySelector('.spinner').style.transform = `translateX(${-(winningCard - 1) * 33.3333}%)`
}

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)
