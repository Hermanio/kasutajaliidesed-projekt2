const POSTERS_PER_ROW = 12;
const RING_RADIUS = 250;

function setup_posters (row) {
  var posterAngle = 360 / POSTERS_PER_ROW;
  for (var i = 0; i < POSTERS_PER_ROW; i ++) {
    var card = document.createElement('div');
    card.className = 'card p-2';
    const ringDiameter = document.querySelector('.spinner-container').offsetWidth

    var transform = 'rotateY(' + (posterAngle * i) + 'deg) translateZ(' + (ringDiameter / 2) + 'px)';
    card.style.webkitTransform = transform;

    var header = card.appendChild(document.createElement('h4'));
    var content = card.appendChild(document.createElement('p'));
    header.textContent = i;
    content.textContent = 'bollocks';

    card.style.left = (ringDiameter / 2) - (ringDiameter / POSTERS_PER_ROW)  + 'px'
    card.style.width = (ringDiameter / POSTERS_PER_ROW * 2) + 'px'
    card.style.height = (ringDiameter / POSTERS_PER_ROW * 2) + 'px'
    row.appendChild(card);
  }

}

function init() {
  setup_posters(document.querySelector('.spinner'));
}

// call init once the document is fully loaded
window.addEventListener('load', init, false);
window.addEventListener('resize', init, false);
