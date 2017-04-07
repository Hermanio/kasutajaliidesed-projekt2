var clicks = 0;

function onClick() {
    clicks += 1;
    $('#clickCounter').text(clicks);
}

function createPrize() {
  if ($('#clickCounter').html() >= 10){
    var newValue = $('#clickCounter').html() - 10;
    $('#clickCounter').html(newValue);
    clicks = newValue;
    $('#errorMessage').empty();
    $("#rewards").append('<div><img src="prize.png" alt="jesus" height="50px"></div>');
  } else {
    $('#errorMessage').text("you need more clicks maan")
  }
}
