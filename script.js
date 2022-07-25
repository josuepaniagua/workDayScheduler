document.querySelector("#currentDay").textContent =
  moment().format("dddd, MMMM Do YYYY");
var save = document.querySelectorAll(".saveBtn");

var todaysTime = moment().hour();
var timeSystem = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (var x = 0; x < 11; x++) {
  if (todaysTime < timeSystem[x]) {
    document.getElementById(x).classList.add("future");
  } else if (todaysTime === timeSystem[x]) {
    document.getElementById(x).classList.add("present");
  } else if (todaysTime > timeSystem[x]) {
    document.getElementById(x).classList.add("past");
  }

  if (localStorage.getItem(x)) {
    document.getElementById(x).value = localStorage.getItem(x);
  }

  save[x].addEventListener("click", output);
}

function output() {
  var data = this.getAttribute("data-id");
  var output = document.getElementById(data).value;
  localStorage.setItem(data, output);
}
