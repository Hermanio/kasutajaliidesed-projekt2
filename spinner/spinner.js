const clickSound = new Audio("resources/click.wav")
const saveCounter = document.querySelector('.saves-counter')
const spinButton = document.querySelector('.spin-button')
let totalSaves = 0

function placePrizes(row) {
  for (let i = 0; i < catsList.length; i ++) {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container p-2 col-4'

    const card = Card({
      imageSrc: catsList[i].includes('http') ? catsList[i] : `resources/cat_photos/${catsList[i]}`,
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
  const winningCard = Math.round(Math.random() * (catsList.length - 1))
  Array.prototype.slice.call(document.getElementsByClassName('card'))
    .map(card => {
      card.classList.remove('card-winning')
      return card
    })
    .map((card, index) => {
      if (index === winningCard) card.classList.add('card-winning')
    })
  document.querySelector('.spinner').style.transform = `translateX(${-(winningCard - 1) * 33.3333}%)`
  spinButton.classList.add('disabled')
  spinButton.disabled = true
  setTimeout(incrementLives, 9250)
}

function incrementLives() {
  saveCounter.innerHTML = ++totalSaves
  spinButton.classList.remove('disabled')
  spinButton.disabled = false
}

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)
