const num = Math.round(Math.random() * 100 + 1);
const form = document.querySelector('form');
let guess = [];
let remaining = 0;
console.log(num);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = form.querySelector('#guessField').value;
  if (num1 != num) {
    guess.push(num1);
    remaining++;
    document.querySelector('.guesses').innerHTML = `${guess}`;
    document.querySelector('.lastResult').innerHTML = `${10 - remaining}`;
    form.querySelector('#guessField').value = '';
    if (remaining == 10) {
      alert('game over');
      location.reload();
    }
  } else if (num1 == num) {
    alert('you have won the game');
    location.reload();
  }
});
