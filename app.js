var clicks = 0;

function onClick() {
    clicks += 1;
    $('#clickCounter').text(clicks);
}

function createPrize() {
  if ($('#clickCounter').html() >= 10){
    console.log("yes");
  } else {
      $('#errorMessage').text("you need more clicks maan")
  }
}
