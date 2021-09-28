/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function sumReducer(sum, val) {
        return sum + val;
    }

    document.getElementById('run').addEventListener('click', function() {
      var numbers = [];
      for (var i = 1; i <= 10; i++) {
        var random = randomInt(1,100);
        numbers.push(random);
      }
      // console.log(numbers);

      for (var i = 0; i < 10; i++) {
        var id = "n-" + (i + 1);
        document.getElementById(id).innerHTML = numbers[i];
      }

      var min = Math.min(...numbers);
      var max = Math.max(...numbers);
      var sum = numbers.map(number => number).reduce(sumReducer, 0);
      var average = sum/numbers.length;

      document.getElementById('min').innerHTML = min;
      document.getElementById('max').innerHTML = max;
      document.getElementById('sum').innerHTML = sum;
      document.getElementById('average').innerHTML = average;

    });



})();
