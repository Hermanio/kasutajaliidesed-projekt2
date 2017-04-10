const PRIZE_COUNT = 120
var clickSound = new Audio("resources/click.wav");
var lastWinningCard;

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
  clickSound.play();
  clickSound.currentTime=0;
  const winningCard = Math.round(Math.random() * PRIZE_COUNT);
  removeAnimationFromLastWinningElement(lastWinningCard);
  lastWinningCard = winningCard;
  console.log(winningCard);
  document.querySelector('.spinner').style.transform = `translateX(${-(winningCard - 1) * 33.3333}%)`
  window.setTimeout(openWinningItem, 1500, winningCard)
}

function openWinningItem(winningCard) {
  //alert("open winning item");
  console.log(winningCard);
  var winningCardElement = document.getElementById("card-"+winningCard);
  winningCardElement.classList.add("winning-card-animation");

}

function removeAnimationFromLastWinningElement(winningElementNumber) {
  if (winningElementNumber) {
      document.getElementById("card-"+winningElementNumber).classList.remove("winning-card-animation");
  }
}

function init() {
  placePrizes(document.querySelector('.spinner'))
}

window.addEventListener('load', init, false)

