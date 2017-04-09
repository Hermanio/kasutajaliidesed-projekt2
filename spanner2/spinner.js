const PRIZE_COUNT = 120;

function placePrizes(row) {
  for (var i = 0; i < PRIZE_COUNT; i ++) {
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card-container p-2 col-4';

    console.log(document.querySelector('.spinner').offsetWidth)
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

function init() {
  placePrizes(document.querySelector('.spinner'));
}

window.addEventListener('load', init, false);
