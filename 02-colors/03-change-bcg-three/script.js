/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click", changeBg);

    function changeBg() {
      var color = generateRandomColor();
      document.body.style.backgroundColor = color;
    }

    function generateRandomColor() {
      var possible = '0123456789ABCDEF';
      var hex = '#';
      for (var i = 0; i < 6; i++) {
        hex += possible[Math.floor(Math.random() * 16)];
      }
      return hex;
    }

})();
