const insert = document.getElementById('insert');

window.addEventListener('keydown', function (event) {
  insert.innerHTML = `<div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>

    <td>${event.key === ' '?"Space":event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
  
</table>
  </div>`;
});

// event.key is the value of the key that was pressed
//we chose window because we want to listen to the whole window where the key is pressed
//event.keyCode is the code of the key that was pressed
//event.code is the physical key on the keyboard that was pressed