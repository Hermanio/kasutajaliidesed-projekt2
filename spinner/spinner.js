const PRIZE_COUNT = 120
const LAST_CARD = PRIZE_COUNT - 1
const MINIMUM_DISTANCE = 50
const clickSound = new Audio("resources/click.wav")
const winSound = new Audio("resources/ovation.wav")
const rattlingSound = new Audio("resources/rattling.wav")
rattlingSound.repeat = true

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

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)

// Get a random int in range [start;end)
function randInt(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}

// Get a random card index that is atleast MINIMUM_DISTANCE away from currentIndex
function getDistantIndex(currentIndex) {
    if (LAST_CARD - currentIndex < MINIMUM_DISTANCE) {
        return randInt(1, currentIndex - MINIMUM_DISTANCE)
    }
    if (currentIndex - MINIMUM_DISTANCE < 1) {
        return randInt(currentIndex + MINIMUM_DISTANCE, LAST_CARD)
    }
    if (Math.random() < .5) {
        return randInt(1, currentIndex - MINIMUM_DISTANCE)
    } else {
        return randInt(currentIndex + MINIMUM_DISTANCE, LAST_CARD)
    }
}

var winningIndex = 0

document.querySelector('#spin-btn').onclick = function (event) {
    let btn = event.target
    btn.disabled = true
    winningIndex = getDistantIndex(winningIndex)
    console.log(winningIndex)

    clickSound.currentTime = 0
    clickSound.play()

    const oldWinnings = document.getElementsByClassName('card-winning')
    for (let i = 0; i < oldWinnings.length; i++) {
        oldWinnings[i].classList.remove('card-winning')
    }

    const winningCard = document.getElementsByClassName('card')[winningIndex]
    winningCard.childNodes[0].src = 'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif'

    rattlingSound.currentTime = 0
    rattlingSound.play()

    const spinner = document.querySelector('.spinner')

    spinner.ontransitionend = function () {
        document.querySelector('.spinner').ontransitionend = null
        rattlingSound.pause()
        winningCard.classList.add('card-winning')

        winSound.currentTime = 0
        winSound.onended = function () {
            btn.disabled = false
        }
        winSound.play()
    }
    spinner.style.transform = `translateX(${-(winningIndex - 1) * 33.3333}%)`
}
