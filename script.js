function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(
    currentDate.getFullYear() + 1,
    0,
    0,
    0,
    0,
    0,
    0
  );

  seconds = (newYearsDate - currentDate) / 1000;

  days = Math.floor(seconds / 3600 / 24);
  seconds = seconds - days * 3600 * 24;

  hours = Math.floor(seconds / 3600);

  seconds -= hours * 3600;

  minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  seconds = Math.floor(seconds);

  console.log(days + " " + hours + " " + minutes + " " + seconds);

  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) time = "0" + time;
  return time;
}

setInterval(countdown, 1000);
