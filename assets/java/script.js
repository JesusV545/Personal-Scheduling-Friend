//Display the current date
let todayAndDate = dayjs();
$('#currentDay').text(todayAndDate.format("MMM D, YYYY"));

//save button function that saves user input when the document is fully loaded
$(document).ready(function() {
  $('.saveBtn').on("click", function() {
    let userText = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time, userText);
  })

  //need a function to track time correctly!
  function timeTracker() {
    let currentTime = dayjs().hour();

    //it's gonna need to loop over blocks
    $('.time-block').each(function() {
      let blockTime = parseInt($(this).attr("id").split("hour")[1]);

      //need to compare whether class needs to be past, present, or future!
      if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

//if there were any items from local storage previously, i need to obtain them for each time block
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

//finaly, just call the timeTracker function
timeTracker();

})