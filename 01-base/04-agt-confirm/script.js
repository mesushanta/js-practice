/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function ask_question() {
      var age = prompt('What is your age?');
      var gender = prompt('Whatr is your gender?');
      var town = prompt('Where do you live?');
      var choice = confirm('Is this information correct? age: <b>' + age + '</b> gender: <b>' + gender + '</b> town: <b>' + town + '</b>');
      if(choice != true) {
        ask_question();
      }
    }
    ask_question();

})();
