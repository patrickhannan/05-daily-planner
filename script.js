$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("h")  

  $("#currentDay").text(today)

  var workHours = {
      amHours: [9, 10, 11],
      pmHours: [12, 1, 2, 3, 4, 5]
  }

  var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  for (var i = 0; i < workHours.amHours.length; i++) {
    var row = $("<div class='row'>")
    var rowHour = $("<div class='col-sm-1 hour'>").text(workHours.amHours[i] + "AM")
    var textInput = $("<textarea class='description col-sm-10 time-block'>")
    textInput.attr("data-time", workHours.amHours[i]);

    if (textInput.attr("data-time") < militaryHours) {
          textInput.addClass("past")
    } else if (textInput.attr("data-time") = militaryHours) {
        textInput.addClass("present")
    } else {
        (textInput.addClass("future"))
    }
    
    var saveButton = $("<button class='col-sm-1 saveBtn'>Save</button>")  

    row.append(rowHour, textInput, saveButton);
    $(".container").append(row);
  }

  for (var i = 0; i < workHours.pmHours.length; i++) {
    var row = $("<div class='row'>")
    var rowHour = $("<div class='col-sm-1 hour'>").text(workHours.pmHours[i] + "PM")
    var textInput = $("<textarea class='description col-sm-10 time-block'>")
    textInput.attr("data-time", workHours.pmHours[i]);

    if (textInput.attr("data-time") < militaryHours) {
        textInput.addClass("past")
    } else if (textInput.attr("data-time") = militaryHours) {
        textInput.addClass("present")
    } else {
        (textInput.addClass("future"))
    }

    var saveButton = $("<button class='col-sm-1 saveBtn'>Save</button>")

    row.append(rowHour, textInput, saveButton);
    $(".container").append(row);
  }

  
});
  

