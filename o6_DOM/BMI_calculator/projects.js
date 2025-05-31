// const height = document.querySelector("#height")
// const weight = document.querySelector("#weight")
// const body = document.querySelector('body')
// const calc = document.querySelector('#results')

// the reason we extracted the values inside the form is because we want the values when they are inserted in them are submitted so that way we have some values if we did that outside what would happen
//that as soon as the page loaded we would get empty values in them
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); //prevent the submission of the form to a server. halt the default
  const height = parseInt(document.querySelector('#height').value); //.value extracts the value from the
  //input field of height and parseInt converts it into a integer
  const weight = parseInt(document.querySelector('#weight').value);
  if (isNaN(height) || isNaN(weight)) {
    console.log('Please enter values');
  } else {
    const sum = (weight / (height * height)).toFixed(2);
    document.querySelector('#results').innerHTML = sum;
  }
});
