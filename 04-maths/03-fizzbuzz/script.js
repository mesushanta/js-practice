/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var numbers = [];
    for(i=1; i<=100; i++) {
      if((i%3) == 0 && (i%5) == 0) {
        numbers.push('fizzbuzz');
      }
      else if((i%3) == 0) {
        numbers.push('fizz');
      }
      else if((i%5) == 0) {
        numbers.push('buzz');
      }
      else {
        numbers.push(i);
      }
    }
    console.log(numbers);

})();
