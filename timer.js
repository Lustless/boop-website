
CountDownTimer('03/18/2018 4:32 PM EST', 'countdown1');
CountDownTimer('03/23/2018 9:32 PM EST', 'countdown2');
CountDownTimer('03/25/2018 7:16 PM EST', 'countdown3');

function CountDownTimer(dt, id)
{
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

      clearInterval(timer);
      document.getElementById(id).innerHTML = 'Event has Ended';

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = days + 'days ';
    document.getElementById(id).innerHTML += hours + 'hrs ';
    document.getElementById(id).innerHTML += minutes + 'mins ';
    document.getElementById(id).innerHTML += seconds + 'secs';
  }

  timer = setInterval(showRemaining, 1000);
}
