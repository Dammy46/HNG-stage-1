var currentDate = new Date();
var currentTimeInMilliseconds = currentDate.getTime();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayOfWeek = currentDate.getDay();
var currentDayOfWeek = daysOfWeek[dayOfWeek];
var elementDay = document.getElementById("day");
var elementtime = document.getElementById("time");

elementDay.textContent = currentDayOfWeek
elementtime.textContent = currentTimeInMilliseconds
