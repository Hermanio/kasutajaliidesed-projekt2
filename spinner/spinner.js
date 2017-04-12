const clickSound = new Audio("resources/click.wav")
const winSound = new Audio("resources/ovation.wav")
const nyanSound = new Audio("resources/nyan.ogg")
const spinningSound = new Audio("resources/drumroll.wav")
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
  stopNyanMode()
  spinningSound.pause()
  nyanSound.pause()
  winSound.pause();
  document.body.classList.remove("nyan-background");

  clickSound.play()
  clickSound.currentTime = 0
  spinningSound.play()
  spinningSound.currentTime = 0
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
  setTimeout(function () {
      if (Math.random() >= 0.5) {
          startNyanMode()
      } else {
          winSound.play()
          winSound.currentTime = 0
      }
  }, 9250)

}

function incrementLives() {
  saveCounter.innerHTML = ++totalSaves
  spinButton.classList.remove('disabled')
  spinButton.disabled = false
}

function startNyanMode() {
    document.getElementById("heading-part").classList.add("nyan-background-gif")
    nyanSound.play()
    nyanSound.currentTime = 0
    document.body.classList.add("nyan-background")
    setTimeout(function () {
      stopNyanMode()
    },7000)
}

function stopNyanMode() {
    nyanSound.pause()
    document.body.classList.remove("nyan-background")
    document.getElementById("heading-part").classList.remove("nyan-background-gif")

}

function stopPreviousAudio() {

}

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)
