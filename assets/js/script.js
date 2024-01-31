$(document).ready(function () {
  // current day
  var currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd, MMMM DD'));

  // tracking what time block user is in during the day based on class.
  var currentHour = dayjs().hour();

  function daySchedule() {
    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id'));

      if (timeBlock < currentHour) {
        $(this).addClass('past');
      } else if (timeBlock === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }

  daySchedule();

  // save button for events

  $('.saveBtn').on('click', function () {
    var eventDescription = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, eventDescription);

    // alert user that they have saved an event.

    function storageTimer() {
      secondsLeft = 10;
      const eventNotice = document.querySelector('#event-notice');
      var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft > 0) {
          eventNotice.innerHTML = `<p>Appointment Added to <span>localStorage</span>\u2713.</p>`;
        } else {
          eventNotice.textContent = '';
          clearInterval(timerInterval);
        }
      }, 1000);
    }

    storageTimer();
  });

  // storage items

  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
});
