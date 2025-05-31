const clock = document.querySelector('#clock');

//to display this time after every second we can use an event

//the first parameter is a callback function the second parameter is the interval after which this function will run every single time
setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

