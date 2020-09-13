$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("HH")  

  $("#currentDay").text(today)
})

