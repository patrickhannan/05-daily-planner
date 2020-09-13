$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("HH")  

  $("#currentDay").text(today)

  var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "23", "0"]

  for (var i = 0; i < workHours.length; i++) {
    var row = $("<div class='row'>")
    var rowHour = $("<div class='col-sm-1 hour'>").text(workHours[i] + ":00")
    var textInput = $("<textarea class='description col-sm-10 time-block'>");
    textInput.attr("data-time", workHours[i]);

    if (textInput.attr("data-hour") < currentHour) {
        textInput.addClass("past");
      } else if (textInput.attr("data-hour") == currentHour) {
        textInput.addClass("present");
      } else {
        textInput.addClass("future");
      }

    var saveButton = $("<button class='col-sm-1 saveBtn'>Save</button>")  

    row.append(rowHour, textInput, saveButton);
    $(".container").append(row);
  }

  

});
  

