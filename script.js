$(function () {
  var today = moment().format("dddd, MMMM Do YYYY")
  var currentHour = moment().format("h a")  

  $("#currentDay").text(today)

  var workHours = {
      amHours: [9, 10, 11, 12],
      pmHours: [1, 2, 3, 4, 5]
  }
   

  for (var i = 0; i < workHours.amHours.length; i++) {
      var row = $("<div class='row'>")
      var rowHour = $("<div class='col-sm-1 hour'>").text(workHours.amHours[i] + "AM")
      var textInput = $("<textarea class='description col-sm-10 time-block>")
    

      

      row.append(rowHour, textInput);
      $(".container").append(row);
  }

  for (var i = 0; i < workHours.pmHours.length; i++) {
    var row = $("<div class='row'>")
    var rowHour = $("<div class='col-sm-1 hour'>").text(workHours.pmHours[i] + "PM")
    var textInput = $("<textarea class='description col-sm-10 time-block>")



    
    row.append(rowHour, textInput);
    $(".container").append(row);
  }
});
  

