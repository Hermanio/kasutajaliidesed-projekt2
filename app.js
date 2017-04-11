const deathCounter = document.querySelector('.deaths-counter')
let totalDeaths = 0
setInterval(killCat, 1000)

function killCat(){
  ++totalDeaths
  deathCounter.innerHTML = totalDeaths
}
