var deathCounter = document.getElementById("deaths")
var totalDeaths = 0
setInterval(setTime, 1000)

function setTime(){
  ++totalDeaths
  deathCounter.innerHTML = totalDeaths % 60
}
