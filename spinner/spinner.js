const PRIZE_COUNT = 120;

function placePrizes(row) {
  for (var i = 0; i < PRIZE_COUNT; i ++) {
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card-container p-2 col-4';

    const card = document.createElement('div')
    card.className = 'card p-2'
    cardContainer.appendChild(card)
    var header = card.appendChild(document.createElement('h4'));
    var content = card.appendChild(document.createElement('p'));
    header.textContent = i;
    content.textContent = 'bollocks';

    row.appendChild(cardContainer);
  }

}

function spin() {
  const winningCard = Math.round(Math.random() * PRIZE_COUNT)
  document.querySelector('.spinner').style.transform = `translateX(${-(winningCard - 1) * 33.3333}%)`
}

function init() {
  placePrizes(document.querySelector('.spinner'));
}

window.addEventListener('load', init, false);
