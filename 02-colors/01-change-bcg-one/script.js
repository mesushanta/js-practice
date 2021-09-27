/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('red').addEventListener("click", changeBg);
    document.getElementById('green').addEventListener("click", changeBg);
    document.getElementById('yellow').addEventListener("click", changeBg);
    document.getElementById('blue').addEventListener("click", changeBg);

    function changeBg() {
      var color = this.id;
      document.body.style.backgroundColor = color;
    }

})();
