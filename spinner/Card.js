
function Card({ imageSrc, headerText, textContent }) {
  const card = document.createElement('div')
  card.className = 'card';

  const image = card.appendChild(document.createElement('img'));
  image.className = 'card-img-top img-fluid'
  image.src = imageSrc;

  const content = card.appendChild(document.createElement('div'))
  content.className = 'card-block'

  const header = content.appendChild(document.createElement('h4'))
  header.className = 'card-title'
  header.textContent = headerText

  const text = content.appendChild(document.createElement('p'))
  text.className = 'card-text'
  text.textContent = textContent

  return card
}
