/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var table = "<table>";
  for (var i = 1; i < 11; i++) {
    table = table + '<tr>';
    for (var j = 1; j < 11; j++) {
      table = table + '<td>' + i*j + '</td>';
    }
    table = table + '</tr>';
  }
  table = table + '</table>';

  console.log(table);
  document.getElementById('target').innerHTML = table;


})();
