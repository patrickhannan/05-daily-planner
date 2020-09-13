$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("HH")  

  $("#currentDay").text(today)

  var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]

  var realHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

  for (var i = 0; i < workHours.length; i++) {
    var row = $("<div class='row'>")
    var rowHour = $("<div class='col-sm-1 hour'>").text(realHours[i])
    var textInput = $("<textarea class='description col-sm-10 time-block'>");
    textInput.attr("data-time", workHours[i]);

    if (textInput.attr("data-time") < currentHour) {
        textInput.addClass("past");
      } else if (textInput.attr("data-time") == currentHour) {
        textInput.addClass("present");
      } else {
        textInput.addClass("future");
      }

    if (localStorage.getItem(workHours[i]) != null) {
        textInput.text(localStorage.getItem(workHours[i]));
      }

    var saveButton = $("<button class='col-sm-1 saveBtn'>Save</button>");
    saveButton.attr("data-time", workHours[i]);

    row.append(rowHour, textInput, saveButton);
    $(".container").append(row);
  }

    $(document).on("click", ".saveBtn", function (event) {
        var storageHour = $(this).attr("data-time");
        var storageText = $(this).siblings(".description").val();
    
        localStorage.setItem(storageHour, storageText);
      });

});
  

