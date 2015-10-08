$(document).ready(function(){
  // console.log('Hello world!')
  addDates()
  setListeners()
})

var addDates = function(){
  var thisMonth = moment().format('MMMM')
  $('#month').text(thisMonth)
  var daysAhead = moment().date(1).day()
  for(i = 0; i < 35; i++) {
    var currentDay = moment().date(2 - daysAhead + i)
    if( (currentDay.month() !== moment().month()) || currentDay.date() < moment().date() ){
      $('#d' + i).html('<span class="unavailable">' + currentDay.date() + '</span>')
    } else if(currentDay.date() === moment().date() && currentDay.month() === moment().month()) {
      $('#d' + i).html('<span class="today">' + currentDay.date() + '</span>')
    } else {
      $('#d' + i).html(currentDay.date())
    }
  }
}

var setListeners = function(){
  $('#mode-switch').on('change', toggleMode)
}

var toggleMode = function(){
  if ($('#mode-switch').is(':checked')){
    $('#show-me').toggleClass('red-text', true)
    $('#show-them').toggleClass('red-text', false)
  } else {
    $('#show-me').toggleClass('red-text', false)
    $('#show-them').toggleClass('red-text', true)
  }
}