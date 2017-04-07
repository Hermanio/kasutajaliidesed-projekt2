var clicks = 0;
var prizeId = 0;
var clickSound = new Audio("materials/click.wav");

function onClick() {
    clicks += 1;
    $('#clickCounter').text(clicks);
    clickSound.play();
    clickSound.currentTime=0;
}

function createPrize() {
  if ($('#clickCounter').html() >= 10){
    var newValue = $('#clickCounter').html() - 10;
    $('#clickCounter').html(newValue);
    clicks = newValue;
    $('#errorMessage').empty();
    prizeId++;
    $("#rewards").append('<div><img src="materials/prize.png" alt="jesus" height="50px" onClick="openPrize()"></div>');
  } else {
    $('#errorMessage').text("you need more clicks maan")
  }
}

function openPrize() {
  console.log("yolo")
}
