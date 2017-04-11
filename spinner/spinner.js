const PRIZE_COUNT = 120
const clickSound = new Audio("resources/click.wav")
const saveCounter = document.querySelector('.saves-counter')
const spinButton = document.querySelector('.spin-button')
let totalSaves = 0

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
  clickSound.play()
  clickSound.currentTime = 0
  const winningCard = Math.round(Math.random() * (PRIZE_COUNT - 1))
  Array.prototype.slice.call(document.getElementsByClassName('card'))
    .map(card => {
      card.classList.remove('card-winning')
      return card
    })
    .map((card, index) => {
      if (index === winningCard) {
        card.classList.add('card-winning')
        card.removeChild(card.childNodes[0])
        const image = card.appendChild(document.createElement('img'))
        image.className = 'card-img-top img-fluid'
        image.src = 'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif'
      }
    })
  document.querySelector('.spinner').style.transform = `translateX(${-(winningCard - 1) * 33.3333}%)`
  spinButton.classList.add('disabled')
  setTimeout(incrementLives, 9250)
}

function incrementLives() {
  saveCounter.innerHTML = ++totalSaves
  spinButton.classList.remove('disabled')
}

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)
