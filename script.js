$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("h a")  

  $("#currentDay").text(today)

  var workHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

  for (var i = 0; i < workHours.length; i++) {
      var row = $("<div class='row'>")
      var rowHour = $("<div class='col-sm-1 hour'>")

      if (i < 2) {
          rowHour.text(workHours[i] + " PM")
      } else {
          rowHour.text(workHours[i] + " AM")
      }

      

      row.append(rowHour);
    $(".container").append(row);
  }
});
  

